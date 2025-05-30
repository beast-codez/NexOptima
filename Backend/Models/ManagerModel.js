const mongoose = require('mongoose');
const ManagerSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    branchCode: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const Manager = mongoose.model('Manager', ManagerSchema);
module.exports = Manager;