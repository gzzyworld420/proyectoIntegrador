// require
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// dos modulos importantes para cargar arcivos
let multer = require('multer');
let path = require('path');

//Multer
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/users'));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

//let upload = multer( { storage : storage } );


// metodo
router.get('/myprofile', userController.myProfile);
//router.post('/myprofile', userController.editMyProfile)

router.get('/login', userController.login);
router.post('/login', userController.loginPost);

router.get('/register', userController.create);
router.post('/register', userController.store);

router.get('/userDetails', userController.userDetails);

/*Crear post - mostrar el formulario
router.get()

*/
//ruta parametrizada
router.get('/editprofile/:id', userController.editProfile);

//router.get('/editprofile', userController.editMyProfile)
//router.post('/editprofile', userController.editProfile)


// export
module.exports = router;