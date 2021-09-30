const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const { getAllCountries, getCountryById } = require('../controllers/country');
const { postActivity } = require('../controllers/activity')
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries', getAllCountries);
router.get('/countries/:idPais', getCountryById);
router.post('/activity', postActivity);


module.exports = router;
