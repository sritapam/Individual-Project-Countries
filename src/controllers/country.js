const { Country, Activity } = require("../db.js");
const { getFromDb, getFromApi } = require("../utils");

const { Op } = require("sequelize");

const getAllCountries = async (req, res) => {
  const { name } = req.query;

  try {
    const countriesDb = await getFromDb();

    if (!name) {
      return res.send(countriesDb);
    } else {
      const nameGood =
        name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

      const nameMatch = await Country.findAll({
        where: {
          name: {
            [Op.like]: `%${nameGood}%`, //que en el medio contenga eso SQL
          },
        },
        include: {
          model: Activity,
          attributes: ['name', 'difficulty', 'duration', 'season', 'createdInDb'],
          through: { attributes: [] },
        },
      });

      nameMatch.length === 0
        ? res.json({
            message: "We're sorry, no matches were found for your search"
          })
        : res.send(nameMatch);
    }
  } catch (e) {
    console.log(e);
  }
};

const getCountryById = async (req, res) => {
  
  const countryId = req.params.idPais.toUpperCase()
try {
    let countryFoundId = await Country.findOne({
      where: {
        alpha3Code: countryId,
      },
      //include: { model: Activity, through: { attributes: [] } },
    });
    res.status(200).send(countryFoundId);
  } catch (e) {
    console.log(e);
  }
};








module.exports = {
  getAllCountries,
  getCountryById,
};
