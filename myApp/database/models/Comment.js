// exportacion
module.exports =  function(sequelize, dataTypes) {

    let alias = "Comment";

    let cols = {
        idCommentarios : {
            auto_increment: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        FkPostId : {
            type: dataTypes.INTEGER
        },

        FkUserId : {
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
        tableName : "commentarios",
        timestamps : true,
        underscored : false,
    }

    let Comment = sequelize.define(alias, cols, config);

    /*
    Comment.associate = function(models){
        Comment.belongsTo(models.User, {
            as: 'User',
            foreignKey: 'idUsuario'
        }),
        Comment.belongsTo(models.Post, {
            as: 'product',
            foreignKey: 'idProducto'
        })
    } 
    */

    return Comment; 
    
}