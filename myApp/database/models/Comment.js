module.exports =  function(sequelize, dataTypes) {

    let alias = "Comment";

    let cols = {
        id_commentarios : {
            auto_increment: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        texto_descriptivo : {
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

        FkUserid : {
            type:dataTypes.INTEGER
        }

    };

    let config = {
        tableName : "commentarios",
        timestamps : true,
        underscored : false,
    }

    let Comment = sequelize.define(alias, cols, config);

    /*
    Comentario.associate = function(models){
        Comentario.belongsTo(models.User, {
            as: 'User',
            foreignKey: 'id_usuario'
        }),
        Comentario.belongsTo(models.Post, {
            as: 'product',
            foreignKey: 'id_producto'
        })
    } */

    return Comment; 
    
}