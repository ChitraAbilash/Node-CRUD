const connection = require('../config/db');
const countryService = require('../service/countryService');

let result;
async function insertUser(fname, lname, email, age) {
  try {
    let sql = `INSERT INTO user(firstname, lastname, email, age, country_id)
               VALUES(?,?,?,?,?)`;

    let values = [fname, lname, email, age, 1];

    await connection.query(sql, values);

    return 'success';
  } catch (err) {
    console.log(err, 'Error');
  }
}

async function getUsers() {
  try {
    let getSql = `SELECT * FROM user`;

    // let getSql = `SELECT firstname, lastname, email, age, c.country_name, c.state
    // FROM user AS u
    // INNER JOIN country AS c ON c.id = u.country_id`;

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

async function getUserById(userID) {
  console.log(userID, 'service ID');

  try {
    let sql = `SELECT * from user WHERE id = ${userID}`;

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

async function updateUserID(id, first, last, email) {
  //any name can be given
  try {
    let sql = `UPDATE user SET firstname = ?, lastname = ?, email= ? WHERE id = ?`;
    let values = [first, last, email, id];

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
    let sql = `DELETE FROM user WHERE id = ${id}`;
    // let value = [id];
    // console.log(value);

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

module.exports = { insertUser, getUsers, getUserById, updateUserID, deleteId };
