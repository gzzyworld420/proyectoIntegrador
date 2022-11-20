// require
const db = require('../data/data');

const dB = require("../database/models");
const Posteo = dB.Posteo;
//const op = db.sequelice.Op


// methods

const postController = {
    create: (req, res) => {
       return res.render('addPost');
    },
    store: (req, res) => {

        let postAGuardar = req.body;

        let post = {
            imagen: postAGuardar.foto,
            texto: postAGuardar.texto_descriptivo
           
        };
        Posteo.create(post)
        .then((results) => {
            return res.redirect('/')
        })
        .catch((err) => {
            console.log(err);
        })



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

