// exportacion
module.exports = function (sequelize, dataTypes) {

    let alias = "Comment";

    let cols = {
        id: {
            auto_increment: true,
            primaryKey: true,
            type: dataTypes.INTEGER(10)
        },
        id_posts: {
            type: dataTypes.INTEGER(10)
        },

        id_users: {
            type: dataTypes.INTEGER(10)
        },

        texto_descriptivo: {
            type: dataTypes.STRING(500)
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },



    };

    let config = {
        tableName: "comments",
        timestamps: false,
        underscored: true,
    }


    let Comment = sequelize.define(alias, cols, config);


    Comment.associate = function (models) {

        Comment.belongsTo(models.User, {
                as: 'users',
                foreignKey: 'id_users'
            }),
            Comment.belongsTo(models.Posteo, {
                as: 'posts',
                foreignKey: 'id_posts'
            })
    }


    return Comment;

}