const fs = require('fs');
const path = require('path');

const framelessImagesDir = path.join(__dirname, '../../public/GalleryFrameless');


const getAllFramelessGalleryImages = async (req, res) => {
    try {
        fs.readdir(framelessImagesDir, (err, files) => {
            if (err) {
                return res.status(500).send('Unable to scan directory: ' + err);
            }
            const images = files.map(file => `/GalleryFrameless/${file}`);
            res.json(images);
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = getAllFramelessGalleryImages;