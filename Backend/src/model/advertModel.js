const db = require("./db");

const findAll = async () => {
    try {
        const [adverts] = await db.query("SELECT * FROM advert");
        return adverts;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const addAdvert = async (advert) => {
    try {
        const { Name, Price, NameShoes, Picture } = advert;
        const [result] = await db.query(
            "INSERT INTO `advert` (Name, Price, NameShoes, Picture) VALUES (?,?,?,?)",
            [Name, Price, NameShoes, Picture]
        );
        return { id: result.insertId, Name, Price, NameShoes, Picture};
    } catch(err) {
        console.log(err);
    }
};

module.exports = { findAll, addAdvert };
