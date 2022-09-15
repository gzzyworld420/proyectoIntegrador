// require
const db = require('../data/data');

// methods
const indexController = {
    index: (req, res) => {
        
        
        res.render("index", { posts : db, comments : db});

    },
    searchResults: (req, res) => {
        res.render('searchResults');
    },



}


// export

module.exports = indexController;