
const { findAll, addAdvert } = require("../model/advertModel");

const getAll = async (req, res) => {
    try {
        const adverts = await findAll();
        res.json(adverts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const createAdvert = async (req, res) => {
    console.log("je suis dans add advert")
    console.log(req.body)
    const result = await addAdvert({...req.body})
};

module.exports = { getAll, createAdvert };
