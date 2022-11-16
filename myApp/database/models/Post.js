module.exports =  function(sequelize, dataTypes) {

    let alias = "Post";

    let cols = {
        idPosteos : {
            autoIncrement: true,
             primaryKey: true,
             type:dataTypes.INTEGER
        },
        foto : {
            type: dataTypes.STRING
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
        FkUserid : {
            type:dataTypes.INTEGER
        }
    };

    let config = {
        tableName : "posteos",
        timestamps : true,
        underscored : false
    }

    let Post = sequelize.define(alias, cols, config);

    
    Post.associate = function(models){
        Post.belongsTo(models.User, {
            as: 'User',
            foreignKey: 'idUsuario'
        }),
        Post.hasMany(models.Comment, {
            as: 'Comment',
            foreignKey: 'idComentarios'
        })

    }  
   

    return Post; 
    
}