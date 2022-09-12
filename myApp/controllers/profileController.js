const profileController = {
    myProfile: (req, res) => {
        res.render("myProfile");
    },
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },
    editProfile: (req, res) => {
        res.render('editProfile');
    },

}

module.exports = profileController;