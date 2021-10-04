const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, createdInDb, countries } =
      req.body;

    const [activityCreated] = await Activity.findOrCreate({
      where: { [Op.and]: [{ name: name }] },
      defaults: { name, difficulty, duration, season, createdInDb },
    });
    var auxiliar = await Promise.all(
      countries.map((c) => {
        var country = Country.findOne({
          where: { name: c },
        });
        return country;
      })
    );
    var auxiliar2 = await activityCreated.addCountries(auxiliar);

    return res.status(200).send("Activity created");
  } catch (e) {
    console.error(e);
    return res.status(404).json({ message: "Creation Failed" });
  }
};

module.exports = { postActivity };
