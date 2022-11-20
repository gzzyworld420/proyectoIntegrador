// require
const db = require('../data/data');
//const posts = db.posts

const dB = require("../database/models");
const posteos = dB.Posteo;
const users = dB.User;

//const op = db.sequelice.Op


// methods
const indexController = {

    
    index: (req, res) => {
       
        let criterios = {
            include: [{ all: true, nested: true }, {association: "users"}, {association: "comments"}],
            limit: 20,
            order: [['created_at', 'DESC']]

        };

        posteos.findAll(criterios, {
            include: [ {association: "users"}, {association: "comments"}]
        })
        .then((results) => {
            return res.render("index", { posts : results}
            )
        })

        .catch(error => {
            console.log(error);
        })
        
        
       //return res.render("index", { posts : db, comments : db} );

    },
    
    searchResults: (req, res) => {
        res.render('searchResults', { posts : db, comments : db} );
    },



}


// export

module.exports = indexController;