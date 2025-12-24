require("dotenv").config();

// Importing required Node.js modules and custom files
const express = require("express");
const mongoose = require("mongoose");
const Url = require("./models/url");

// Routes
const UrlRouter = require("./routes/url");

const port = process.env.PORT || 8080;

// MongoDB connection URL
const dbUrl = process.env.ATLAS_URL || "mongodb://127.0.0.1:27017/url-shortener";

// MongDB connection
mongoose.set("strictQuery", false);

mongoose.connect(dbUrl).then(() => console.log("MongoDB connected successfully")).catch((err) => console.error("MongoDB connection error:", err));

const app = express();

app.use(express.json());

// Routes
app.use("/url",UrlRouter);

app.get("/",async (req, res) => {
    try{
        const urls = await Url.find({});
        res.json(urls);
    } catch (err ) {
        res.status(500).json({ error: "Could not fetch URLs"});
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});