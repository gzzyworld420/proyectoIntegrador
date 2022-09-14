const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/editprofile', userController.editProfile);
router.get('/myprofile', userController.myProfile);
router.get('/login', userController.login);
router.get('/register', userController.register);



router.get('/userDetails/:id?', userController.userDetails);

module.exports = router;