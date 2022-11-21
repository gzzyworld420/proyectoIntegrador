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
       

        
        Posteo.findAll()
        .then((results) => {
            return res.render('editPost', {posts : results});
        })
        .catch((error) => {
            console.log(error);
        })
        
        
    },
    edit: (req, res) => {

        let info = req.body

        Posteo.update(
            {
                imagen: info.foto,
                texto: info.texto_descriptivo,
                id_users: info.id_users,
                user: info.user_id,
                comment: info.comment,
                users: info.usuarios

            }, 
            { where: {id: req.body.id}}
                )
        .then((results) => {
            return res.redirect('/');
        })
        .catch((error) => {
            res.redirect('/')
        })
        
        
     // res.send(req.body)
    }
    ,
    postDetails: (req, res) => {
        
        Posteo.findAll({
            include: [ {all: true, nested:true},
                {association: "users"}, {association: "comments"}]
         } )
        .then((results) => {
            res.render('postDetails', {posts : results, 
               // users : db.usersList
            });

        })
        
    },
    comments: (req, res) => {
        
    },
    destroy: (req, res) => {
        let id = req.body.id
        Posteo.destroy({
            where:[{
                id:id
            }]})
            .then((results)=>{
                return res.rediect('/');
            })
            .catch((error) => {
                return res.redirect('/')
            })
        
        }
}


// exports
module.exports = postController; 

