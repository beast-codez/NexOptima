const bcrypt = require("bcrypt");
const UserModel = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const signup = async (req, res) => {
  try {
    const { name, email, password , userType} = req.body;
    const user = await UserModel.findOne({ email , userType});
    if (user) {
      return res
        .status(400)
        .json({ message: "email already exists", success: false });
    }
    const userModel = new UserModel({ name, email, password , userType});
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    

    return res.status(200).json({
      message: "User added successfully",
      success: true,
    });
  } catch (err) {
    return res
      .status(400)
      .json({ message: " internal server error", success: false });
  }
};
const login = async (req, res) => {
  try {
    const { email, password , userType } = req.body;
    const user = await UserModel.findOne({ email , userType});
    if (!user) {
      return res
        .status(400)
        .json({ message: "invalid email ", success: false });
    }
    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res
        .status(400)
        .json({ message: "incorrect password ", success: false });
    }
    const jwttoken = jwt.sign(
      { name: user.name, email: user.email , userType : user.userType},
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    return res.status(200).json({
      message: " login successful",
      success: true,
      jwttoken: jwttoken,
      name: user.name,
      email: email,
    });
  } catch (err) {
    return res
      .status(400)
      .json({ message: " internal server error", success: false });
  }
};
module.exports = { signup, login };
