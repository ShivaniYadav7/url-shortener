require("dotenv").config();

// Importing required Node.js modules and custom files
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Url = require("./models/url");
const UrlRouter = require("./routes/url");
const UrlController = require("./controllers/url");

const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;

const allowedOrigins = [
    "https://shivaniyadav7.github.io","http://localhost:5173"
];

app.use(cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true 
}));

// MongoDB connection URL
const dbUrl = process.env.ATLAS_URL || "mongodb://127.0.0.1:27017/url-shortener";

// MongDB connection
mongoose.set("strictQuery", false);

mongoose.connect(dbUrl).then(() => console.log("MongoDB connected successfully")).catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/url",UrlRouter);

app.get('/:shortUrl', UrlController.redirectUrl);

app.get("/",async (req, res) => {
    res.send("MinionURL is Live!Visit us at https://shivaniyadav7.github.io/url-shortener/")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});