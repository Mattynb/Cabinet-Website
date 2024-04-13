const Cabinet = require('../../models/Cabinet'); // Update the path accordingly

const createCabinet = async (req, res) => {
    try {
        const cabinet = new Cabinet({
            productId: req.body.productId,
            description: req.body.description,
            price: req.body.price,
            color: req.body.color,
            type: req.body.type
        });
        const savedCabinet = await cabinet.save();
        res.status(201).send(savedCabinet);
    } catch (error) {
        res.status(400).send(error);
    }
    
};

module.exports = createCabinet