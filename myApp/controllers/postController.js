// require
const db = require('../data/data');

// methods

const postController = {
    addPost: (req, res) => {
        res.render('addPost');
    },
    postDetails: (req, res) => {

        
        res.render('postDetails', {posts : db.postsList, users : db.usersList});
    }
}


// exports
module.exports = postController; 

