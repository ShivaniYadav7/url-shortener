const Url = require("../models/url");
const crypto = require("crypto");

// Custom Hashing Function
const generateShortCode = (inputString) => {
    // MD5 hash (fast and common) of the long URL
    // 'digest("hex")' turns it into a readable string
    const hash = crypto.createHash("md5").update(inputString).digest("hex");

    // We'll take only first 7 characters to keep it short
    return hash.slice(0,7);

}

module.exports.createShortUrl = async (req, res) => {

    const { longUrl } = req.body;

    try {
        let existingUrl = await Url.findOne({longUrl: longUrl});

        if (existingUrl){
            return res.status(200).json({
                shortUrl: existingUrl.shortUrl,
                status: "found"
            });
        }

        // If not found, create new logic
        const shortCode = generateShortCode(longUrl);

        const newUrl = new Url({
            longUrl: longUrl,
            shortUrl: shortCode 
        });

        await newUrl.save();

        return res.status(201).json({
            shortUrl: shortCode,
            status: "created"
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({error: "Server Error"});
    }
};

module.exports.redirectUrl = async (req, res) => {
    const { shortUrl } = req.params;

    try{
        const existingUrl = await Url.findOne({shortUrl : shortUrl});

        if(existingUrl){
            return res.redirect(existingUrl.longUrl);
        }

        else{
            return res.status(404).json({message: "Does not exists"});
        }
    }
    catch  (err) {
        console.error((err));
        return res.status(500).json({error: "Server Error"})
    }
};