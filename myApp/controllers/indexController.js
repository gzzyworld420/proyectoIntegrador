// require
const db = require('../data/data');


const dB = require("../database/models");
const posts = dB.Post;
const users = dB.User;

//const op = db.sequelice.Op


// methods
const indexController = {

    index: (req, res) => {
        let criterios = {
        };

        posts.findAll()
        .then((results) => {
            return res.render("index", { posts : results})
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