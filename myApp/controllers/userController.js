
// siguiendo el modelo MVC, una vez ya creado el modelo, el modelo de base de datos se comunica con el controlador
const db = require("../data/data"); 

// methods
const userController = {
    userDetails: (req, res) => {
        
        res.render('userDetails');
    }, 
    myProfile: (req, res) => {
        // console.log(db);
        // para desde el controlador enviarle info a las vistas, se usa el metodo render y se le pasa como parametro un objeto con la info que se quiere enviar
        res.render('myProfile', {user: db.usersList[0], posts: db.postsList});
    }, 
    login: (req, res) => {
        res.render('login');
    }, 
    register: (req, res) => {
        res.render('register');
    }, 
    // haciendola una ruta parametrizada que significa que va a recibir un parametro 
    editProfile: (req, res) => {
        // para desde el controlador enviarle info a las vistas, se usa el metodo render y se le pasa como parametro un objeto con la info que se quiere enviar
        res.render('editProfile', {user: db.usersList, indice: req.params.id});
    }
 
}

// exports
module.exports = userController;
