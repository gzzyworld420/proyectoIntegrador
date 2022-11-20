module.exports = function (sequelize, dataTypes) {

    let alias = "User";

    let cols = {
        id: {
            auto_increment: true,
            primaryKey: true,
            type: dataTypes.INTEGER(10)
        },
        email: {
            type: dataTypes.STRING(500),

        },
        username: {
            type: dataTypes.STRING(45),
        },
        password: {
            type: dataTypes.STRING(45)
        },
        profile_picture: {
            type: dataTypes.STRING(100)
        },
        dni: {
            type: dataTypes.INTEGER(11)
        },
        fecha: {
            type: dataTypes.DATE
        },     
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
       

    };

    let config = {
        tableName: "users",
        timestamps: false,
        underscored: true
    }

    let User = sequelize.define(alias, cols, config);

    
    User.associate = function (models) {
        User.hasMany(models.Posteo, {
                as: "posteos",
                foriegnKey: "id_users"
            })

        User.hasMany(models.Comment, {
            as: "Comment",
            foreignKey: "id_users"
        })

    
            
    }
    

    return User;

}