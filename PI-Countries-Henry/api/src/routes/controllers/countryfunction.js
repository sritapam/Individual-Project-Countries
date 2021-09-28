const { Op } = require("sequelize");
const axios = require("axios");
const { Country, Activity } = require("../../db.js");

const getAllCountries = async () => {
  let countries = await Country.findAll({
    attributes: [
      "alpha3Code",
      "name",
      "flags",
      "continent",
      "capital",
      "region",
      "area",
    ],
  });
  if (!countries.length) {
    var apiUrl = await axios.get("https://restcountries.com/v3/all");
    //console.log(apiUrl);
    const apiInfo = await apiUrl.data.map((c) => {
      return {
        alpha3Code: c.cca3,
        name: c.name.common,
        flags: c.flags.find((e) => e.includes("png")),
        continent: c.region,
        capital: c.capital && c.capital[0],
        region: c.subregion,
        area: c.area,
      };
    });
    //console.log(apiInfo)
    //   apiInfo.forEach((c) => {
    //   Country.create({
    //     alpha3Code: c.alpha3Code,
    //     name: c.name,
    //     flags: c.flags,
    //     continent: c.continent,
    //     capital: c.capital,
    //     region: c.region,
    //     area: c.area,
    //   });
    // });
    await Country.bulkCreate(apiInfo);
  }
  countries = await Country.findAll({
    attributes: ['alpha3Code', 'name', 'flags', 'continent', 'capital', 'region', 'area'],
    include: Activity,
  });

  //console.log(countries);
  return countries;
};

getAllCountries();

const countryforName = async (name) => {
  name = name[0].toUpperCase() + name.slice(1);
  var countryName = await Country.findAll({
    attributes: [
      "alpha3Code",
      "name",
      "flags",
      "continent",
      "capital",
      "region",
      "area",
    ],
    where: {
      //filtro la
      name: {
        [Op.startsWith]: name,
      },
    },
  });
  console.log(countryName);
  return countryName;
};
module.exports = { getAllCountries, countryforName };

// let countriesTotal = await getAllCountries();
// if (name){
//     let countriesName = await countriesTotal.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
