const fs = require('fs');
const path = require('path');

const framedImagesDir = path.join(__dirname, '../../public/GalleryFramed');
const framelessImagesDir = path.join(__dirname, '../../public/GalleryFrameless');




const getAllGalleryImages = async (req, res) => {
    try {
        const framedImages = await getAllFramedGalleryImages();
        const framelessImages = await getAllFramelessGalleryImages();

        const allImages = framedImages.concat(framelessImages);
        res.json(allImages);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

const getAllFramedGalleryImages = async () => {
    return new Promise((resolve, reject) => {
        fs.readdir(framedImagesDir, (err, files) => {
            if (err) {
                return reject('Unable to scan directory: ' + err);
            }
            const images = files.map(file => `/GalleryFramed/${file}`);
            resolve(images);
        });
    });
}
const getAllFramelessGalleryImages = async () => {
    return new Promise((resolve, reject) => {
        fs.readdir(framelessImagesDir, (err, files) => {
            if (err) {
                return reject('Unable to scan directory: ' + err);
            }
            const images = files.map(file => `/GalleryFrameless/${file}`);
            resolve(images);
        });
    });
}

module.exports = getAllGalleryImages;