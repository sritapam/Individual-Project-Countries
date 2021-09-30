const axios = require("axios");
const { Country } = require("../db.js");

const getFromApi = async () => {
  const { data } = await axios.get("https://restcountries.com/v3/all");
  const dataFromApi = data.map((c) => {
    return {
      name: c.name.common,
      alpha3Code: c.cca3,
      capital: c.capital ? c.capital[0] : "capital not found",
      continent: c.region,
      area: c.area,
      region: c.subregion,
      flags: c.flags.find((e) => e.includes("png")),
    };
  });
const dB = await Country.bulkCreate(dataFromApi);

  return dB;//fijarme o sacarlo porque es una promesa
};

const getFromDb = async () => {
    const countriesinDb = await Country.findAll();
    return countriesinDb;
  };


module.exports = {
    getFromApi,
    getFromDb,
};