const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/addposts', postController.addPost);





router.get('/postdetails/:id', postController.postDetails);

module.exports = router;