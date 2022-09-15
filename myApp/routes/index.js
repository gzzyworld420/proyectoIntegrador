// require
const express = require('express');
const router = express.Router();
const indexController = require("../controllers/indexController");


// metodo
router.get('/', indexController.index);

// ruta parametrizada
router.get('/searchResults', indexController.searchResults);

// export
module.exports = router;
