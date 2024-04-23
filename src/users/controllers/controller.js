const pool = require("../../../connection");
const q = require("../helpers/queries");
const { v4: uuidv4 } = require('uuid');

// ? GET / get all users
const getUsers = (req, res) => {
  pool.query(q.getAllUsers, (error, result) => {
    if (error) {
      console.log(error);
      throw error;
    }
    console.log(result);
    res.status(200).json(result.rows);
  });
};

// ? GET / add a user to the db
const addUser = (req, res) => {
  const userId = uuidv4();
  let { firstname, lastname, age, uuid, created, location } = req.body;
  pool.query(q.addUser, [ firstname , lastname, age, uuid = userId, created, location ], (error, result) => {
    if (error) {
      console.log(error);
      throw error;
    }
    console.log(result);
    res.status(200).json(result.rows);
  });
};

// ? GET / get the user with the given id
const getUserById = (req, res) => {
  const id = req.params.id;
  pool.query(q.getUserByID, [id], (error, result) => {
    if (error) {
      console.log(error);
      throw error;
    }
    console.log(result);
    res.status(200).json(result.rows);
  });
};

module.exports = {
  getUsers,
  addUser,
  getUserById,
};
