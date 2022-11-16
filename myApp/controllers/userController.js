
// siguiendo el modelo MVC, una vez ya creado el modelo, el modelo de base de datos se comunica con el controlador
const db = require("../data/data"); 
const bycript = require('bcryptjs')
/*
const db = require("../database/data")
const User = db.User
const op = db.sequelice.Op
*/

// methods
const userController = {
    userDetails: (req, res) => {
        
        res.render('userDetails', {user: db.usersList[0], posts: db.postsList} );
    }, 

    myProfile: (req, res) => {
        // console.log(db);
        // para desde el controlador enviarle info a las vistas, se usa el metodo render y se le pasa como parametro un objeto con la info que se quiere enviar
        res.render('myProfile', {user: db.usersList[0], posts: db.postsList});
    }, 

    create: (req, res) => {
        res.render('register');
    }, 

    store: (req, res) => {
        let userStorage = req.body;

        /*  LO DE HASHING 
        let user = {
            name: userStorage.name,
            email: userStorage.email,
            password: bycript.hashSync(userStorage.password, 10);

        }

        */


        /*  CREATE PARA LA CREACION DE NUEVOS USUARIOS

        User.create(user) - Este se implementa solamente despues de que funciona perfectamente lo de userStorage(CRUD)

        User.create(userStorage)
        .then((results) => {
            return res.redirect('/users/login');
        })
        .catch( (err) => {
            console.log(err)
        });
        */

        

        return res.send(userStorage)
    },

    login: (req, res) => {
        res.render('login');
    }, 

    loginPost: (req, res) => {
        /*
        let info = req.body;
        let filtro = {
            where: [ {email: info.email} ]
        }
        User.findOne(filtro) 
        .then((result) => {
            if(result != null {
                let passEncriptada = bycript.compareSync(info.password, result.password)
            }
            if(passEnciptada){
                return res.redirect('/');
            } else {
                return res.send('la Clave no coincide')
            }
        }) 
        .catch(error => console.log(error))
         return res.send(req.body);
        */

       

    },

    // haciendola una ruta parametrizada que significa que va a recibir un parametro 
    editProfile: (req, res) => {
        // para desde el controlador enviarle info a las vistas, se usa el metodo render y se le pasa como parametro un objeto con la info que se quiere enviar
        res.render('editProfile', {user: db.usersList, indice: req.params.id});
    }
 
}

// exports
module.exports = userController;
