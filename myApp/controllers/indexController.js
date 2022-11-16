// require
const db = require('../data/data');


//const db = require("../database/data")

//const op = db.sequelice.Op


// methods
const indexController = {

    index: (req, res) => {

/*
        let criterios = {

        };

        posts.findAll()
        .then((result) => {
            return res.render("index", { posts : result})
        })

        .catch(error => {
            console.log(error);
        })
        */
        res.render("index", { posts : db, comments : db} );

    },
    searchResults: (req, res) => {
        res.render('searchResults', { posts : db, comments : db} );
    },



}


// export

module.exports = indexController;