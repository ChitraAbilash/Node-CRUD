const countryService = require('../service/countryService');

exports.postAddCountry = async (req, res) => {
  console.log(req, 'postReq');
  const country_name = req.body.country_name;
  const state = req.body.state;
  const city = req.body.city;

  console.log(country_name);
  console.log(state);
  console.log(city);

  const postAddCountryResult = await countryService.insertCountry(
    country_name,
    state,
    city
  );
  console.log(postAddCountryResult, 'PostResult');
  if (postAddCountryResult) {
    res.json({
      response: postAddCountryResult,
    });
  } else {
    res.json({
      response: 'could not insert data',
    });
  }
};

exports.getCountry = async (req, res) => {
  const getCountryResult = await countryService.getCountry();
  console.log(getCountryResult);
  if (getCountryResult) {
    res.json({
      response: getCountryResult,
    });
  } else {
    res.json({
      response: 'NO records found!',
    });
  }
};

exports.getCountryById = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  const getCountryByIdResult = await countryService.getCountryId(id);
  console.log(getCountryByIdResult, 'CountryId');
  if (getCountryByIdResult) {
    res.json({
      response: getCountryByIdResult,
    });
  } else {
    res.json({
      response: 'NO data found!',
    });
  }
};

exports.updateCountryById = async (req, res) => {
  const id = req.params.id;
  const country_name = req.body.country_name;
  const state = req.body.state;
  const city = req.body.city;

  console.log(id, country_name, state, city);

  const updateCountryByIdResult = await countryService.updateCountry(
    id,
    country_name,
    state,
    city
  );
  console.log(updateCountryByIdResult);
  if (this.updateCountryById) {
    res.json({
      response: 'Updated succesfully',
    });
  } else {
    res.json({
      response: 'NO data found!',
    });
  }
};

exports.deleteCountry = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  const deletedId = await countryService.deleteId(id);
  console.log(deletedId);
  if (deletedId) {
    res.json({
      response: 'deleted',
    });
  }
};
