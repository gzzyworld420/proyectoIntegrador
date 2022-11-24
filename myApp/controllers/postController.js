// require
let db = require('../database/models')
//const db = require('../data/data');
const session = require('express-session');
const posteo = db.Posteo;
let comentario = db.comentario;
const users = db.User;

// methods

const postController = {
<<<<<<< HEAD
    searchbyId: (req, res) => {
        let idBuscado = req.params.id;

        let followers = db.users.findAll({
            where: [{
                id_users: idBuscado
            }]
        })

        let resUsuario = db.users.findByPk(idBuscado, {
            include: [{
                all: true,
                nested: true
            }]
        })
        Promise.all([followers, resUsuario])
            .then(function ([followersres, resUsuariores]) {
                return res.render('userDetails', {
                    user: db.usersList,
                    followers: followersres,
                    posts: db.postsList
                })
            }).catch(function (error) {
                return res.send(error)
            })
    },
=======
>>>>>>> 0dbb3d206e947e17faa60a5756ffe56a3e0e741e
    create: (req, res) => {
        
            return res.render('addPost')
       
    },

    
    add: (req, res) => {
        if (req.session.user != undefined) {
            console.log(req.file);
            db.Posteo.create({
                nombre: req.body.titulo,
                descripcion: req.body.descripcion,
                imagen_url: req.file.filename,
                id_usuario: req.session.user.id
            })
            return res.redirect('/')
        } else {
            return res.send('Log in before post!')
        }
    },
    

    store: (req, res) => {
        let postAGuardar = req.body;
        let post = {
            imagen: postAGuardar.foto,
            texto: postAGuardar.texto_descriptivo
        };
        posteo.create(post)
            .then((results) => {
                return res.redirect('/')
            })
            .catch((err) => {
                console.log(err);
            })
        return res.redirect('/');
    },
    update: (req, res) => {
        posteo.findByPk(req.query.id_posteo)
            .then(function (resultado) {
                if (req.session.user != undefined && req.session.user.id == resultado.id_usuario) {
                    return res.render('editarPosteo', {
                        posteo: resultado
                    })
                } else {
                    return res.redirect('/')
                }
            }).catch(function (error) {
                console.log(error);
            })

    },
    edit: (req, res) => {

        let info = req.body

        posteo.update({
                imagen: info.foto,
                texto: info.texto_descriptivo,
                id_users: info.id_users,
                user: info.user_id,
                comment: info.comment,
                users: info.usuarios

            }, {
                where: {
                    id: req.body.id
                }
            })
            .then((results) => {
                //return res.redirect('/');
                return res.render("editPost")
            })
            .catch((error) => {
                //res.redirect('/')
                console.log(error);
            })
        // res.send(req.body)
    },
    postDetails: (req, res) => {

        posteo.findAll({
                include: [{
                        all: true,
                        nested: true
                    },
                    {
                        association: "users"
                    }, {
                        association: "comments"
                    }
                ]
            })
            .then((results) => {
                res.render('postDetails', {
                    posts: results,
                    
                });

            })
            .catch((err) => {
                console.log(err);
            })

    },
    comments: (req, res) => {
        let idPost = req.params.id
        if (req.session.user != undefined) {
            db.Comentario.create({
                id_usuario: req.session.user.id,
                id_posteo: req.body.id_posteo,
                texto: req.body.texto
            })
            return res.redirect('/posteo/detalle/id/' + req.body.id_posteo)
        } else {
            return res.redirect('/usuario/login')
        }

    },
    destroy: (req, res) => {
        let id = req.body.id
        posteo.destroy({
                where: [{
                    id: id
                }]
            })
            .then((results) => {
                return res.rediect('/');
            })
            .catch((error) => {
                return res.redirect('/')
            })

    },
    likes: (req, res) => {
        let likes = {}
        if (req.session.user != null) {
            db.Likes.findOne({
                    where: [{
                        id_usuario: req.session.user.id
                    }, {
                        id_posteo: req.body.idPosteo
                    }]
                })
                .then(function (relacionEncontrada) {
                    if (relacionEncontrada == undefined) {
                        db.Likes.create({
                            id_usuario: req.session.user.id,
                            id_posteo: req.body.idPosteo
                        }).then(function (info) {
                            return res.redirect('/posteo/detalle/id/' + req.body.idPosteo)
                        }).catch(function (error) {
                            console.log(error);
                        })
                    } else {
                        return res.redirect('/posteo/detalle/id/' + req.body.idPosteo)
                    }
                })
        } else {
            return res.redirect('/usuario/login')
        }

    }
}
// exports
module.exports = postController;