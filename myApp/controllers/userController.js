const db = require("../data/data");
const userController = {
    userDetails: (req, res) => {
        
        res.render('userDetails');
    }, 
    myProfile: (req, res) => {
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

module.exports = userController;
