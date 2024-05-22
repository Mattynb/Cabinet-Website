const fs = require('fs');
const path = require('path');

const framedImagesDir = path.join(__dirname, '../../public/GalleryFramed');

const getAllFramedGalleryImages = async (req, res) => {
    try {
        fs.readdir(framedImagesDir, (err, files) => {
            if (err) {
                return res.status(500).send('Unable to scan directory: ' + err);
            }
            const images = files.map(file => `/GalleryFramed/${file}`);
            res.json(images);
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = getAllFramedGalleryImages;