const connection = require('../config/db');

async function insertCountry(country_name, state, city) {
  try {
    let sql = `INSERT INTO country(country_name, state, city)
    VALUES(?,?,?)`;

    let values = [country_name, state, city];

    return new Promise((resolve, reject) => {
      connection.query(sql, values, (err, data) => {
        if (err) {
          return reject(err);
        } else {
          console.log(data, 'inserteddata');
          return resolve(data);
        }
      });
    });
  } catch (err) {
    console.log(err, 'Error');
  }
}

async function getCountry() {
  try {
    let getSql = `SELECT * FROM country`;
    console.log(getSql);

    return new Promise((resolve, reject) => {
      connection.query(getSql, (err, data) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(data);
        }
      });
    });
  } catch (err) {
    console.log(err, 'Error');
  }
}

async function getCountryId(id) {
  try {
    let sql = `SELECT * from country WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
      connection.query(sql, (err, data) => {
        if (err) {
          return reject(err);
        } else {
          console.log(data);
          return resolve(data);
        }
      });
    });
  } catch (err) {
    console.log(err, 'Error');
  }
}

async function updateCountry(id, country_name, state, city) {
  try {
    let sql = `UPDATE country SET  country_name = ?, state= ?, city= ? WHERE id = ?`;
    let values = [country_name, state, city, id];

    return new Promise((resolve, reject) => {
      connection.query(sql, values, (err, data) => {
        if (err) {
          return reject(err);
        } else {
          console.log(data, 'updatedata');
          return resolve(data);
        }
      });
    });
  } catch (err) {
    console.log(err, 'Error');
  }
}

async function deleteId(id) {
  try {
    let sql = `DELETE FROM country WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
      connection.query(sql, (err, data) => {
        if (err) {
          return reject(err);
        } else {
          console.log(data, 'deleted data');
          return resolve(data);
        }
      });
    });
  } catch (err) {
    console.log(err, 'Error');
  }
}

module.exports = {
  insertCountry,
  getCountry,
  getCountryId,
  updateCountry,
  deleteId,
};
