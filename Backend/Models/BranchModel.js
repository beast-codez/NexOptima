const mongoose = require('mongoose');
const branchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
    branchCode: {
        type: String,
        required: true,
        unique: true,
    },
    manager: {
        type: String,
    },
});
const Branch = mongoose.model('Branch', branchSchema);
module.exports = Branch;