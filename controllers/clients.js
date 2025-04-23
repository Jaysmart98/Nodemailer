const cloudinary = require('cloudinary').v2;
require('dotenv').config()


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
});

const clients = async (req, res) => {
    console.log(req.file.originalname);
    
    try {
        const uploadResult = await cloudinary.uploader
            .upload(req.file.path, {public_id: req.file.originalname.split('.')[0],})
            .catch((err) => {
                console.log(err);
                res.status(401).json({message: 'Upload is not successful', error: err})
            });
    
        console.log(uploadResult);
        if(uploadResult) {
            res.status(201).json({message: 'Upload successfully'})
        }
    } catch(err) {
        res.status(501).send({error: err})
    }
}

module.exports = clients