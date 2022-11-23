// require
let db = require('../database/models')
const db = require('../data/data');

const {
    where,
    EmptyResultError
} = require('sequelize');
const posteos = dB.Posteo;
let comentario = db.comentario;
const users = dB.User;
let op = db.sequelize.Op;

// prueba cambios en el indexController
// methods
const indexController = {
    index: (req, res) => {

        let criterios = {
            include: [{
                all: true,
                nested: true
            }, {
                association: "users"
            }, {
                association: "comments"
            }],
            limit: 20,
            order: [
                ['created_at', 'DESC']
            ]

        };
        posteos.findAll(criterios, {
            include: [{
                association: "users"
            }, {
                association: "comments"
            }]
        })

    },
    searchUsuarios: (req, res) => {
        return res.render('formSearchUsuarios')
    },
    searchUser: (req, res) => {
        buscado = req.query.buscadoUsuario;
        let criterios = {
            include: [{
                all: true,
                nested: true
            }],
            where: [{
                nombre: {
                    [op.like]: "%" + buscado + "%"
                }
            }],
            limit: 10,
            order: [
                ['created_at', 'DESC']
            ]
        }
        usuario.findAll(criterios)
            .then(function (resultado) {
                return res.render('resUserSearch', {
                    post: db,
                    comments: db
                })
            })
    },
    search: (req, res) => {
        buscado = req.query.buscado;
        console.log(req.query.order);
        let primerCriterio = {
            include: [{ all: true, nested: true }],
            where: [{ nombre: { [op.like]: "%" + buscado + "%" } }],
            limit: 10,
            order: [['created_at', 'DESC']]
        }
        let segundocriterio = {
            include: [{ all: true, nested: true }],
            where: [{ nombre: { [op.like]: "%" + buscado + "%" } }],
            limit: 10,
            order: [['created_at', 'ASC']]
        }
        if (req.query.order != null) {
            posteo.findAll(segundoCriterio)
            .then(function (resultado) {
                return res.render('searchResult', { post: db, comments: db})
            })
            .catch(function (error) {
                return res.send(error)
            })
            
        } else {
            posteo.findAll(primerCriterio)
            .then(function (resultado) {
                return res.render('searchResult', { post: db, comments: db })
            
            })
            .catch(function (error) {
                return res.send(error)
            })
        }
    }
}
// export
module.exports = indexController;