// require
const db = require('../data/data');


const dB = require("../database/models");
const posteos = dB.posts;

//const op = db.sequelice.Op


// methods
const indexController = {

    index: (req, res) => {


        let criterios = {

        };

        posteos.findAll()
        .then((result) => {
            return res.render("index", { posteos : result}, { posts : db, comments : db} )
        })

        .catch(error => {
            console.log(error);
        })
        
        //res.render("index", { posts : db, comments : db} );

    },
    searchResults: (req, res) => {
        res.render('searchResults', { posts : db, comments : db} );
    },



}


// export

module.exports = indexController;