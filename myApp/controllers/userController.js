
// require
const db = require("../data/data");

// methods
const userController = {
    userDetails: (req, res) => {
        
        res.render('userDetails');
    }, 
    myProfile: (req, res) => {
        console.log(db.usersList[0]);
        res.render('myProfile', {users : db, posts : db});
    }, 
    login: (req, res) => {
        res.render('login');
    }, 
    register: (req, res) => {
        res.render('register');
    }, 
    editProfile: (req, res) => {
        res.render('editProfile', {users : db});
    }, 
    
    
}

// exports
module.exports = userController;
