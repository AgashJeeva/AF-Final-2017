const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({

    firstName: String,

    lastName: String,

    nationality: String

});

module.exports = mongoose.model("Author", authorSchema);