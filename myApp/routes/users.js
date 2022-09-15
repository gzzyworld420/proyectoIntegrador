// require
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// metodo
router.get('/myprofile', userController.myProfile);
router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/userDetails', userController.userDetails);

//ruta parametrizada
router.get('/editprofile/:id', userController.editProfile);

// export
module.exports = router;