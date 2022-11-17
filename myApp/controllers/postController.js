// require
const db = require('../data/data');

const dB = require("../database/models");

//const op = db.sequelice.Op


// methods

const postController = {
    create: (req, res) => {
       return res.render('addPost');
    },
    store: (req, res) => {

        let postAGuardar = req.body;


      return res.redirect('/');
    },
    update: (req, res) => {
        
    },
    postDetails: (req, res) => {

        
        res.render('postDetails', {posts : db.postsList, users : db.usersList});
    }
}


// exports
module.exports = postController; 

