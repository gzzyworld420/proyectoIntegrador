// require
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');


router.get('/detalle/id/:id', postController.searchbyId)
router.post('/detalle/comentarios', postController.comments)
router.post('/detalle/like', postController.likes)
// dos modulos importantes para cargar arcivos
let multer = require('multer');
let path = require('path');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/posts'));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer( { storage : storage } );

// metodo 

//para mostrar el formulario de movies
router.get('/addposts', postController.create);
router.post('/addposts', upload.single('profile-picture'), postController.store)



router.get('/update', postController.update);
router.post('/update', postController.edit);

router.post('/crear', postController.add)

router.post('/delete', postController.destroy)
// ruta parametrizada
router.get('/postdetails/:id', postController.postDetails);

router.get('/editPost', postController.editPost)
router.post('/editPost', postController.storeEdit)


//export
module.exports = router;