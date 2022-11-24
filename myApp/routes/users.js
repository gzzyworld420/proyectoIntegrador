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

let upload = multer( { storage : storage } );


// metodo
router.get('/myprofile', userController.myProfile);
//router.post('/myprofile', userController.editMyProfile)


router.get('/login', userController.login);
//router.post('/login', userController.loginPost);

router.get('/register', userController.create);
router.post('/register', upload.single('profile_picture') ,userController.store);

router.get('/userDetails', userController.userDetails);

router.get('/detalle/id/:id', userController.searchbyId)



router.get('/logout', userController.logout)

router.post('/seguir', userController.follow)




//ruta parametrizada
router.get('/editprofile/:id', userController.editProfile);

//router.post('/editprofile', userController.editMyProfile)



// export
module.exports = router;