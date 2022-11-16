module.exports = function (sequelize, dataTypes) {

    let alias = "User";

    let cols = {
        idUsuarios: {
            auto_increment: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email: {
            type: dataTypes.STRING,

        },
        username: {
            type: dataTypes.STRING
        },
        contrasenia: {
            type: dataTypes.STRING
        },
        textoPerfil: {
            type: dataTypes.STRING
        },
        fecha: {
            type: dataTypes.DATE
        },
        dni: {
            type: dataTypes.INTEGER
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        },
    };

    let config = {
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    }

    let User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Post, {
                as: "Post",
                foriegnKey: "FkPostId"
            }),
            User.associate = function (models) {
                User.hasMany(models.comment, {
                    as: "Comment",
                    foreignKey: "idCommentarios"
                })
            }
    }

    return User;

}