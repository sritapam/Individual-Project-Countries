const { Router } = require("express");

const router = Router();
const {  getAllCountries,  countryforName } = require("./controllers/countryfunction.js");

// /* GET /countries:
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
// Obtener un listado de los paises.*/

// router.get("/countries", async (req, res, next) => {
//   try {
//     const { name } = req.query;
//     //res.send('Soy la ruta get de countries')
//     if (name) {
//       const nameCountry = await countryforName(name);
//       // le pregunto si tiene length forName si tiene devuelve el pais si no el mensaje
//       res
//         .status(200)z
//         .send(
//           nameCountry.length
//             ? nameCountry
//             : [{ msj: "I cant found your country, try again, please" }]
//         );
//     } else {
//       const all = await getAllCountries();
//       res.status(200).send(all);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
















// let countriesTotal = await getAllCountries();
// if (name){
//     let countriesName = await countriesTotal.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
//         countriesName.length ?
//         res.status(200).send(countriesName) :
//         res.status(404).send('These country doesnt exists');
//      }
//      else {
//        res.status(200).send(countriesTotal)
//     }

// });

// // Configurar los routers
// // Ejemplo: router.use('/auth', authRouter);
// //me traigo todo y lo hago asincrono x las dudas
// const {Country, Activity} = require('../db');
// const axios = require("axios");

// const getApiInfo = async () => {
//   const apiUrl = await axios.get("https://restcountries.com/v3/all");
//   //console.log(apiUrl);
//   const apiInfo = await apiUrl.data.map((c) => {
//     return {
//       alpha3Code: c.cca3,
//       name: c.name.common,
//       flag: c.flags.find(e=> e.includes('png')),
//       continent: c.region,
//       capital: c.capital && c.capital[0],
//     subregion: c.subregion,
//       area: c.area,
//     };
//   });
//   return apiInfo;

// //  apiInfo.forEach(c=>{
// //      Country.findOrCreate(
// //     where{
// //         alpha3Code:c.alpha3Code,
// //        name: c.name,
// //          flags: c.flag,
// //         continent: c.region,
// //          capital: c.capital,
// //          region: c.subregion,
// //          area: c.area,
// //       })
// // })

// };

// //traigo data de la base de datos
// const getDbInfo = async ()=>{
//     return await Country.findAll({
//         include:{
//             model: Activity,
//             attributes: ['name', 'difficulty', 'duration', 'season'],
//             //, 'flags', 'continent','capital', 'region','area', 'population'
//             through: {
//                 attributes: [],
//             }
//         }
//     }
//     )
// };

// const getAllCountries = async () => {
//     const apiInfo = await getApiInfo();
//     const dbInfo = await getDbInfo();
//     const infoTotal = apiInfo.concat(dbInfo);
//     return infoTotal;
// };

// router.get('/countries', async (req, res)=>{
//    // aprovecho y uso la otra ruta /countries?name="..." lo que me pasan por url
//     const {name} = req.query;
//     let countriesTotal = await getAllCountries();
//     if (name){
//         let countriesName = await countriesTotal.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
//         countriesName.length ?
//         res.status(200).send(countriesName) :
//         res.status(404).send('These country doesnt exists');
//      }
//      else {
//        res.status(200).send(countriesTotal)
//     }

// });
