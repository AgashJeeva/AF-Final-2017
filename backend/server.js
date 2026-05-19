const express = require("express");

const cors = require("cors");

const connectDB = require("./config/db");

const authorRoutes = require("./routes/authorRoutes");

const bookRoutes = require("./routes/bookRoutes");

const app = express();


// DATABASE
connectDB();


// MIDDLEWARE
app.use(cors());

app.use(express.json());


// ROUTES
app.use("/api/authors", authorRoutes);

app.use("/api/books", bookRoutes);


// SERVER
app.listen(5000, () => {

    console.log("Server Running on Port 5000");
});