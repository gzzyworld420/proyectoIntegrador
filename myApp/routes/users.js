// require
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// metodo
router.get('/myprofile', userController.myProfile);
router.get('/login', userController.login);
router.post('loginPost', userController.loginPost);

router.get('/register', userController.create);
router.post('/register', userController.store);

router.get('/userDetails', userController.userDetails);

/*Crear post - mostrar el formulario
router.get()

*/
//ruta parametrizada
router.get('/editprofile/:id', userController.editProfile);

// export
module.exports = router;