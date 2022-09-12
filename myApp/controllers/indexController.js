const db = require('../data/data');

const indexController = {
    home: (req, res) => {
        let users = db.usersList;
        res.render("index", {users : users});

    },


}

module.exports = indexController;