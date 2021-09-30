const axios = require("axios");
const { Country, Activity } = require("../db.js");

const getFromApi = async () => {
  
  try{
  const { data } = await axios.get("https://restcountries.com/v3/all");
  
  const dataFromApi = await data.map( async (c) => {
    
    const country = {
      name: c.name.common,
      alpha3Code: c.cca3,
      capital: c.capital ? c.capital[0] : "capital not found",
      continent: c.region,
      area: c.area,
      region: c.subregion,
      flags: c.flags.find((e) => e.includes("png")),
    };
  
  Country.findOrCreate({
    where: { alpha3Code: c.cca3 },
    defaults: country,
  });
  
  return country;
});

return dataFromApi;
} catch (e) {
(e) => console.log(e);
}
}

const getFromDb = async () => {
    const countriesinDb = await Country.findAll();
    return countriesinDb;
  };


module.exports = {
    getFromApi,
    getFromDb,
};