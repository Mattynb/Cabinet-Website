const { FramedCollection } = require('../../models/Collections');

const getFramedCollection = async (req, res) => {
    try {
        const framedCollection = await FramedCollection.find({});
        res.json(framedCollection);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching framed collection');
    }
};

module.exports = getFramedCollection;