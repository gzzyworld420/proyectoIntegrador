let db = require('../data/data');
const postController = {
    addPost: (req, res) => {
        res.render('addPost');
    },
    postDetails: (req, res) => {

        //let post = db.bucarporId(idPost);
        res.render('postDetails', {posts : db.postsList, users : db.usersList});
    }
}

module.exports = postController;