const Cabinet = require('../../models/Cabinet');

// for multiple
const createCabinets = async (req, res) => {
    try {
        // Use insertMany to add all cabinet objects in the array
        const cabinets = await Cabinet.insertMany(req.body);
        res.status(201).send(cabinets);
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = createCabinets