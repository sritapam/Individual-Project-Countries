const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, createdInDb, countries } =
      req.body;

    if (
      !name ||
      name.length > 30 ||
      !difficulty ||
      Number.parseInt(difficulty) > 5 ||
      Number.parseInt(difficulty) <= 0
    ) {
      res.status(400).send("Valores incorrectos o incompletos");
      return;
    }
    let activity = await Activity.findOne({
      where: { name },
    });

    if (!activity) {
      activity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
        createdInDb,
      });
    }

    const countriesDb = await Country.findAll({
      where: { name: countries },
    });

    activity.addCountries(countriesDb);

    return res.status(200).send("Activity created");
  } catch (e) {
    console.error(e);
    return res.status(404).json({ message: "Creation Failed" });
  }
};

const getActivity = async (req, res) => {
  try {
    const resposeActivity = await Activity.findAll();
    res.status(200).send(resposeActivity);
  } catch (e) {
    return res.status(404).send(e);
  }
};

module.exports = { postActivity, getActivity };

// const [activityCreated] = await Activity.findOrCreate({
//   where: { [Op.and]: [{ name: name }] },
//   defaults: { name, difficulty, duration, season, createdInDb },
// });
// var auxiliar = await Promise.all(
//   countries.map((c) => {
//     var country = Country.findOne({
//       where: { name: c },
//     });
//     return country;
//   })
// );
// var auxiliar2 = await activityCreated.addCountries(auxiliar);
