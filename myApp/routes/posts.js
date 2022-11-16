// require
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');


// metodo 

//para mostrar el formulario de movies
router.get('/addposts', postController.create);


//Guardar la info del post

router.post('/addposts', postController.store)

/* UPDATE PARA POSTS

router.get('update/:id', postController.update);



*/


// ruta parametrizada
router.get('/postdetails/:id', postController.postDetails);


//export
module.exports = router;