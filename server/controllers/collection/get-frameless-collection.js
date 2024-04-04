const { FramelessCollection } = require('../../models/Collections');


const getFramelessCollection = async (req, res) => {
    try {
        const framelessCollection = await FramelessCollection.find({});
        res.json(framelessCollection);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching frameless collection');
    }
};

module.exports = getFramelessCollection;