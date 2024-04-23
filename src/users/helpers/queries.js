const getAllUsers = "SELECT * FROM users";
const getUserByID = "SELECT * FROM users WHERE id = $1";
const addUser = "INSERT INTO users (firstname , lastname, age, uuid, created, location) VALUES ($1, $2, $3, $4, $5, $6)";

// "firstname": "john",
// "lastname": "doe",
// "age": 21,
// "uuid": "c0d29c78-88fd-4c4a-b4f6",
// "created": "2023-06-04T23:00:00.000Z",
// "location": "['-122.4194', '37.7749']"


module.exports = {
    getAllUsers,
    addUser,
    getUserByID,
}