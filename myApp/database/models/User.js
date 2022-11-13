module.exports =  function(sequelize, dataTypes) {

    let alias = "User";

    let cols = {
        id_usuarios : {
            auto_increment: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email : {
            type: dataTypes.STRING,
            
        },
        username : {
            type: dataTypes.STRING
        },
        contrasenia : {
            type: dataTypes.STRING
        },
        texto_perfil : {
            type: dataTypes.STRING
        },
        fecha : {
            type: dataTypes.DATE
        },
        dni : {
            type: dataTypes.INTEGER
        },
        createdAt : {
            type:dataTypes.DATE
        },
        updatedAt: {
            type:dataTypes.DATE
        },
        deletedAt : {
            type:dataTypes.DATE
        },
    };

    let config = {
        tableName : "usuarios",
        timestamps : true,
        underscored : false
    }

    let User = sequelize.define(alias, cols, config);

   User.associate = function (models) {
       User.hasMany(models.Post, {
           as: "Post",
           foriegnKey: "FkUserid"
       }),
    User.associate = function (models) {
        User.hasMany(models.comment, {
            as: "comment",
            foreignKey: ""
        })
    }
   }

    return User; 
    
}