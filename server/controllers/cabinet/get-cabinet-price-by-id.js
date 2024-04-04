const getCabinetPriceById = async (req, res) => {
    try {
        const cabinet = await Cabinet.findOne({ productId: req.params.productId });
        if (!cabinet) {
            return res.status(404).json({ message: 'Cabinet not found' });
        }
        res.json({ price: cabinet.price });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = getCabinetPriceById;