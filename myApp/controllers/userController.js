//const db = require("../data/data");
const bcrypt = require('bcryptjs');
const dB = require("../database/models");
const user = dB.User;
const posteos = dB.Posteo
const session = require('express-session');
const cookieParser = require('cookie-parser');



const userController = {
    searchbyId: (req, res) => {
        let idBuscado = req.params.id;

        let followers = db.Seguidor.findAll({
            where: [{
                id_seguido: idBuscado
            }]
        })

        let resUsuario = db.Usuario.findByPk(idBuscado, {
            include: [{
                all: true,
                nested: true
            }]
        })
        Promise.all([followers, resUsuario])
            .then(function ([followersres, resUsuariores]) {
                let posteosCronolicos = resUsuariores.posteo.reverse()
                return res.render('userDetails', {
                    user: db.usersList,
                    followers: followersres,
                    posts: db.postsList
                })
            }).catch(function (error) {
                return res.send(error)
            })
    },
    register: (req, res) => {
        

    },
    userDetails: (req, res) => {

            let criterios = {
            include: [{
                all: true,
                nested: true
            }],
            limit: 20,
            order: [
                ['created_at', 'DESC']
            ]}

        posteos.findAll(criterios) 
        .then((results) => {
            return res.render('userDetails', {posts: results});
        }) 
        .catch((err) => {
            console.log(err);
        })
        
    }, 

    editProfile: (req,res) => {
        db.user.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            usuario: req.body.username,
            contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
            fecha_nacimiento: req.body.fecha_nacimiento,
            numero_documento: req.body.numero_documento,
            foto: req.body.foto,
        }, { where: { id: req.body.id } })
            .then(function (result) {
                return res.redirect('/usuario/detalle/id/' + req.body.id)
            }).catch(function (error) {
                console.log(error);
            })

    },
    myProfile: (req, res) => {
        // console.log(db);
        // para desde el controlador enviarle info a las vistas, se usa el metodo render y se le pasa como parametro un objeto con la info que se quiere enviar

        if (req.session.user != null) {
            let followers = db.Seguidor.findAll({
                where: [{
                    id_seguido: req.session.user.id
                }]
            })
            let resUsuario = db.Usuario.findByPk(req.session.user.id, {
                include: [{
                    all: true,
                    nested: true
                }]
            })
            Promise.all([followers, resUsuario])
                .then(function ([postsList, usersList]) {
                    return res.render('myProfile', {
                        user: db.usersList[0],
                        posts: db.postsList
                    })
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else {
            return res.redirect('/users/login')
        }
    },

    create: (req, res) => {
    
            user.create({
                
                email: req.body.email,
                usuario: req.body.username,
                //contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
                //foto: req.file.filename,

            }).then((result) => {
                return res.render('register')
            }).catch((error) => {
                console.log(error);
            })
        
    },

    store: (req, res) => {
        let userStorage = req.body;
         let profilePicture = req.file.fieldname;

        let errors = {};
        // HASHING
        
        let passEncriptada = bcrypt.hashSync(userStorage.password, 10);  
        let usuario = {

            email: userStorage.email,
            nombre: userStorage.username,
            password: passEncriptada,
            
            img : profilePicture //Multer

        } 
        
        user.create(userStorage)
            .then((results) => {
                return res.redirect('/');
            })
            .catch((err) => {
                console.log(err);
            })

    },

    logout: (req,res) =>{
        res.clearCookie('userId')
        req.session.destroy();
        // res.locals.user = null;
        return res.redirect('/');
    },
    login: (req, res) => {
        return res.render('login')
    },

   
    // haciendola una ruta parametrizada que significa que va a recibir un parametro 
    editProfile: (req, res) => {
        // para desde el controlador enviarle info a las vistas, se usa el metodo render y se le pasa como parametro un objeto con la info que se quiere enviar
        res.render('editProfile', {
            user: db.usersList,
            indice: req.params.id
        });
    },
    follow: (req,res) => {
        let followersmsg = {}
        if (req.session.user != null) {
            db.Seguidor.findOne({ where: [{ id_seguidor: req.session.user.id }, { id_seguido: req.body.idPerfil }] })
                .then(function (relacionEncontrada) {
                    if (relacionEncontrada == undefined) {
                        db.Seguidor.create({
                            id_seguidor: req.session.user.id,
                            id_seguido: req.body.idPerfil
                        }).then(function (info) {
                            return res.redirect('/user/detalle/id/' + req.body.idPerfil)
                        }).catch(function (error) {
                            console.log(error);
                        })
                    } else {
                        return res.redirect('/user/detalle/id/' + req.body.idPerfil)
                    }
                })
        } else {
            return res.redirect('/users/login')
        }
    }
    /*
    editMyProfile: (req, res) => {
        return res.render('myProfile');
    }
 
    */
}

// exports
module.exports = userController;