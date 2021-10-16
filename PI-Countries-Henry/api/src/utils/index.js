const axios = require("axios");
const { Country, Activity } = require("../db.js");

const getFromApi = async () => {
  try {
    const { data } = await axios.get("https://restcountries.com/v3/all");

    const dataFromApi = data.map((c) => {
      return {
        name: c.name.common,
        alpha3Code: c.cca3,
        capital: c.capital ? c.capital[0] : "capital not found",
        continent: c.region,
        area: c.area,
        region: c.subregion,
        flags: c.flags.find((el) => el.includes("svg")),
      };
    });

    // await Country.destroy({
    //   where: {

    //   }
    // })

    const dB = await Country.bulkCreate(dataFromApi);
  } catch (e) {
    (e) => console.log(e);
  }
};

const getFromDb = async () => {
  const countriesinDb = await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: { attributes: [] },
    },
  });
  return countriesinDb;
};

module.exports = {
  getFromApi,
  getFromDb,
};
