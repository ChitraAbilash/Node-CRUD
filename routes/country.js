const express = require('express');
const countryController = require('../controller/country');
const { route } = require('./user');

const router = express.Router();

router.post('/country', countryController.postAddCountry);

router.get('/country', countryController.getCountry);

router.get('/country/:id', countryController.getCountryById);

router.patch('/country/:id', countryController.updateCountryById);

router.delete('/country/:id', countryController.deleteCountry);

module.exports = router;
