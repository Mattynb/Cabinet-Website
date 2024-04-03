const getAllCabinets = async (req, res) => {
    try {
        const cabinets = await Cabinet.find();
        res.json(cabinets);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = getAllCabinets;