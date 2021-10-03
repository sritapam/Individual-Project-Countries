const { Country, Activity } = require("../db.js");


const postActivity = async (req, res) => {

  try{
  const { name, difficulty, duration, season, createdInDb, countries } = req.body;

  const activityCreated = await Activity.create({
    name, difficulty, duration, season, createdInDb
  })

  let activityDb = await Country.findAll(
    {
      where: {name: countries}
    }
  )
  activityCreated.addCountries(activityDb);

return res.status(200).send('Activity created');
}
catch (e) {
  console.error(e);
  return res.status(400).json({ message: 'Creation Failed' })}
};


module.exports = { postActivity };
