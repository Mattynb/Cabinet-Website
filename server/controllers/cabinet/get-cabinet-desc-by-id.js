const Cabinet = require('../../models/Cabinet');

const getCabinetDescById = async (req, res) => {
    try {
        const cabinet = await Cabinet.findOne({ productId: req.params.productId });
        if (!cabinet) {
            return res.status(404).json({ message: 'Cabinet not found' });
        }
        res.json({ description: cabinet.description });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = getCabinetDescById;