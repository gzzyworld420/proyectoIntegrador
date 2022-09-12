const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/addposts', postController.addPost);
router.get('/postdetails', postController.postDetails);
router.get('/searchResults', postController.searchResults);


module.exports = router;