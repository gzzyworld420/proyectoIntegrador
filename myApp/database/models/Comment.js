// exportacion
module.exports = function (sequelize, dataTypes) {

    let alias = "Comment";

    let cols = {
        id: {
            auto_increment: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_posts: {
            type: dataTypes.INTEGER
        },

        id_users: {
            type: dataTypes.INTEGER
        },

        texto_descriptivo: {
            type: dataTypes.STRING
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
    };


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