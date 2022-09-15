// require
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// metodo
router.get('/editprofile', userController.editProfile);
router.get('/myprofile', userController.myProfile);
router.get('/login', userController.login);
router.get('/register', userController.register);


// ruta parametrizada
router.get('/userDetails/:id?', userController.userDetails);


// export
module.exports = router;