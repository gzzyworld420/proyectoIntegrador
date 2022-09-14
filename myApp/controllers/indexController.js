const db = require('../data/data');
const indexController = {
    index: (req, res) => {
        
        
        res.render("index", { posts : db, comments : db});

    },
    searchResults: (req, res) => {
        res.render('searchResults');
    },



}

module.exports = indexController;