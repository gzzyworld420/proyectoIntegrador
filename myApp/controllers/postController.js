const postController = {
    addPost: (req, res) => {
        res.render('addPost');
    },
    postDetails: (req, res) => {
        res.render('postDetails');
    },
    searchResults: (req, res) => {
        res.render('searchResults');
    }
}

module.exports = postController;