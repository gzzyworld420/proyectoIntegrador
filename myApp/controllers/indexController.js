// require
<<<<<<< HEAD
let dB = require('../database/models')
//const db = require('../data/data');

const posteos = dB.Posteo;
let comentario = dB.comentario;
const users = dB.User;
let op = dB.sequelize.Op;
=======
let db = require('../database/models')
// const db = require('../data/data');

const posteos = db.Posteo;
let comentario = db.comentario;
const users = db.User;
let op = db.sequelize.Op;
>>>>>>> 0dbb3d206e947e17faa60a5756ffe56a3e0e741e

// prueba cambios en el indexController
// methods
const indexController = {
    index: (req, res) => {

        let criterios = {
            include: [{
                all: true,
                nested: true
            }],
            limit: 20,
            order: [
                ['created_at', 'DESC']
            ]

        };
<<<<<<< HEAD
        posteos.findAll(criterios, 
            /*
            {
            include: [{
                association: "users"
            }, {
                association: "comments"
            }]
        } */
        
        )

        .then((resultados) => {
            return res.render('index', {posts:resultados})
        })
        .catch((err) => {
            console.log(err);
=======
        posteos.findAll(criterios)
        .then((results)=> {
            res.render('index', {posteos: results})
        }) 
        .catch((error)=>{
            console.log(error);
>>>>>>> 0dbb3d206e947e17faa60a5756ffe56a3e0e741e
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
<<<<<<< HEAD
        users.findAll(criterios)
            .then(function (resultado) {
                return res.render('resUserSearch', {
                    post: resultado,
                    comments: resultado
=======
        usuario.findAll(criterios)
            .then( (resultado) => {
                return res.render('resUserSearch', {
                    post: resultado,
                    comments: resultado,
>>>>>>> 0dbb3d206e947e17faa60a5756ffe56a3e0e741e
                })
            })
            .catch((error)=>{
                console.log(error);
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
        let segundoCriterio = {
            include: [{ all: true, nested: true }],
            where: [{ nombre: { [op.like]: "%" + buscado + "%" } }],
            limit: 10,
            order: [['created_at', 'ASC']]
        }
        if (req.query.order != null) {
            posteo.findAll(segundoCriterio)
            .then( (resultado) => {
                return res.render('searchResult', { post: resultado, comments: resultado})
            })
            .catch( (error) => {
                return res.send(error)
            })
            
        } else {
            posteo.findAll(primerCriterio)
            .then( (resultado) => {
                return res.render('searchResult', { post: resultado, comments: resultado})
            
            })
            .catch( (error) => {
                return res.send(error)
            })
        }
    }
}
// export
module.exports = indexController;