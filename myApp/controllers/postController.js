// require
let db = require('../database/models')
const db = require('../data/data');
const session = require('express-session');
const posteos = dB.Posteo;
let comentario = db.comentario;
const users = dB.User;

// methods

const postController = {
    searchbyId: (req, res) => {
        let idBuscado = req.params.id
        posteos.findByPk(idBuscado, {
                order: [
                    ["created_at", "ASC"]
                ],
                include: [{
                    all: true,
                    nested: true
                }]
            })
            .then(function (resultadoPosteo) {
                let comentariosOrdenados = resultadoPosteo.comentarios.reverse()
                return res.render('detallePost', )
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    create: (req, res) => {
        if (req.session.user != undefined) {
            return res.render('agregarPost')
        } else {
            res.redirect('/usuario/login')
        }
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

        Posteo.update({
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
                return res.redirect('/');
            })
            .catch((error) => {
                res.redirect('/')
            })
        // res.send(req.body)
    },
    postDetails: (req, res) => {

        Posteo.findAll({
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
                    // users : db.usersList
                });

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
        Posteo.destroy({
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

    }
}
// exports
module.exports = postController;