module.exports =  function(sequelize, dataTypes) {

    let alias = "Comment";

    let cols = {
        idCommentarios : {
            auto_increment: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        post_id : {
            type: dataTypes.INTEGER
        },

        user_id : {
            type:dataTypes.INTEGER
        },

        textoDescriptivo : {
            type: dataTypes.STRING
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
        tableName : "comentarios",
        timestamps : true,
        underscored : false,
    }

    let Comment = sequelize.define(alias, cols, config);

    
    Comment.associate = function(models){
        Comment.belongsTo(models.User, {
            as: 'User',
            foreignKey: 'user_id'
        }),
        Comment.belongsTo(models.Post, {
            as: 'Post',
            foreignKey: 'post_id'
        })
    } 
    

    return Comment; 
    
}