const express= require('express');
//import functions
const { createUser, getUsers, loginUser, updateUser, deleteUser } = require('../controllers/userController');

const router = express.Router();

router.route('/').get(getUsers).post(createUser);

router.route('id').put(updateUser).delete(deleteUser);

router.route('/login').post(loginUser);

module.exports = router;