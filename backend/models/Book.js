const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({

    name: String,

    isbn: String,

    price: Number,

    year: Number,

    publisher: String,

    author: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "Author"
    }

});

module.exports = mongoose.model("Book", bookSchema);