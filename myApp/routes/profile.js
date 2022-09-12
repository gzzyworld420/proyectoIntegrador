const express = require('express');
const router = express.Router();
const profileController = require("../controllers/profileController");

router.get('/myprofile', profileController.myProfile);
router.get('/login', profileController.login);
router.get('/register', profileController.register);
router.get('/editprofile', profileController.editProfile);

module.exports = router;
