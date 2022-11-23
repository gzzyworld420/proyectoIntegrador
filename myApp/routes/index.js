// require
const express = require('express');
const router = express.Router();
const indexController = require("../controllers/indexController");


// metodo
router.get('/', indexController.index);
//agregando rutas - -> Benito, chequeate esto que este bien despues :)
router.get('/search/usuarios', indexController.searchUsuarios)
router.get('/search', indexController.search);
router.get('/search/user', indexController.searchUser);


router.get('/searchResults', indexController.searchResults);

// export
module.exports = router;
