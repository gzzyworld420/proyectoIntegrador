// require
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');


// metodo 


router.get('/addposts', postController.addPost);




// ruta parametrizada
router.get('/postdetails/:id', postController.postDetails);


//export
module.exports = router;