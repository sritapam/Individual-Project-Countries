const { Country, Activity } = require("../db.js");
const { getFromDb } = require("../utils");

const { Op } = require("sequelize");

const postActivity = async (req, res) => {

  const { name, difficulty, duration, season } = req.body;
try{
  const activityCreated = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
  res.send(activityCreated);
}
catch (e){
  res.status(404).send('Error')
}
  //error?.message | 'Error en carga de datos'
};

module.exports = { postActivity };
