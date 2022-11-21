
// siguiendo el modelo MVC, una vez ya creado el modelo, el modelo de base de datos se comunica con el controlador
const db = require("../data/data"); 
const bcrypt = require('bcryptjs');

const dB = require("../database/models");
const User = dB.User
//const op = db.sequelice.Op


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
       // let profilePicture = req.file.fieldname;

       //let errors = {};
        // HASHING
        /*
        let passEncriptada = bcrypt.hashSync(userStorage.password, 10);  
        let user = {

            email: userStorage.email,
            nombre: userStorage.username,
            password: passEncriptada,
            

           // img : profilePicture //Multer

        } 
        */
        
        User.create(userStorage)
        .then((results) => {
            return res.redirect('/users/login');
        })
        .catch((err) => {
            console.log(err);
        })

        


         

      
    },

    login: (req, res) => {
        res.render('login');
    }, 

    loginPost: (req, res) => {

        return res.send(req.body);
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
         
        */

       

    },

    
    // haciendola una ruta parametrizada que significa que va a recibir un parametro 
    editProfile: (req, res) => {
        // para desde el controlador enviarle info a las vistas, se usa el metodo render y se le pasa como parametro un objeto con la info que se quiere enviar
        res.render('editProfile', {user: db.usersList, indice: req.params.id});
    },
    /*
    editMyProfile: (req, res) => {
        return res.render('myProfile');
    }
 
    */
}

// exports
module.exports = userController;
