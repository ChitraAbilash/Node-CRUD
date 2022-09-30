const userService = require('../service/userService');

exports.postAddUser = async (req, res) => {
  console.log(req.body, 'REQ BODY');
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const age = req.body.age;
  // console.log(firstname);
  // console.log(lastname);
  // console.log(email);
  // console.log(age);

  const result = await userService.insertUser(firstname, lastname, email, age);
  if (result) {
    res.json({
      response: 'data inserted successfully',
    });
  }
};

exports.getUsers = async (req, res) => {
  const getResult = await userService.getUsers();
  console.log(getResult, 'GET Controller');

  // let newValue = getResult.map((item) => (
  //   {
  //   firstName: item.firstname,
  //   lastName: item.lastname,
  //   country: item.country_name,
  // }));
  // console.log(newValue, 'NEW VALUE');
  if (getResult) {
    res.json({
      response: getResult,
    });
  } else {
    res.json({
      response: 'NO records found!',
    });
  }
};

exports.getUserById = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  const userIdResult = await userService.getUserById(id);
  console.log(userIdResult, 'USERIDRes');
  if (userIdResult) {
    res.json({
      response: userIdResult,
    });
  } else {
    res.json({
      response: 'NO data found!',
    });
  }
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  console.log(req.body, 'REQ BODY UPDATE');
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  console.log(id, 'ID..');
  console.log(lastname, 'lastname..');
  console.log(firstname, 'firstname..');
  console.log(email, 'email..');

  const updateID = await userService.updateUserID(
    id,
    firstname,
    lastname,
    email
  );
  console.log(updateID, 'updateID..');
  if (updateID) {
    res.json({
      response: 'updated',
    });
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  const deletedId = await userService.deleteId(id);
  console.log(deletedId);
  if (deletedId) {
    res.json({
      response: 'deleted',
    });
  }
};
