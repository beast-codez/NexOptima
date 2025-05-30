const express = require("express");
const router = express.Router();
//models import
const Branch = require("../Models/BranchModel");
const Manager = require("../Models/ManagerModel");

router.get("/branches", (req, res) => {
  Branch.find()
    .then((branches) => {
      res.json(branches);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    });
});

//router to add a new branch
router.post("/addBranch", (req, res) => {
  const { branchCode, name } = req.body;
  const newBranch = new Branch({
    branchCode,
    name,
  });
  newBranch
    .save()
    .then(() => {
      res
        .status(201)
        .json({ message: "Branch added successfully", success: true });
    })
    .catch((err) => {
      console.error(err);
      res.json({ error: "Internal server error", success: false });
    });
});

//router to add a new manager
router.post("/addManager", async (req, res) => {
  const { name, branchCode, email, password } = req.body;

  try {
    const branch = await Branch.findOne({ branchCode: branchCode });

    if (!branch) {
      return res.json({
        message: "Branch not found",
        success: false,
      });
    }

    if (branch.manager !== null && branch.manager !== undefined) {
      return res.json({
        message: "Manager already exists for this branch",
        success: false,
      });
    }

    const newManager = new Manager({
      name,
      branchCode,
      email,
      password,
    });

    const savedManager = await newManager.save();

    await Branch.findOneAndUpdate(
      { branchCode: branchCode },
      { $set: { manager: savedManager._id } }
    );

    res.status(201).json({
      message: "Manager added successfully",
      success: true,
    });
  } catch (err) {
    console.error(err);
    res.json({
      message: "Internal server error",
      success: false,
    });
  }
});

//route for searching managers by branch code
router.post("/searchManager", async (req, res) => {
  const { branchCode } = req.body;

  try {
    const branch = await Branch.findOne({ branchCode });
    if (!branch) {
      return res.json({
        message: "Branch not found",
        success: false,
      });
    }
    const manager = await Manager.findOne({ branchCode: branchCode });
    if (!manager) {
      return res.json({
        message: "Manager not found for this branch",
        success: false,
      });
    }
    res.json({
      message: "Manager found",
      success: true,
      managers: manager,
    });
  } catch (err) {
    console.error(err);
    res.json({
      message: "Internal server error",
      success: false,
    });
  }
});
module.exports = router;
