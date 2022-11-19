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
        
        user_id : {
            type:dataTypes.INTEGER
        },
        createdAt : {
            type:dataTypes.DATE
        },
        updatedAt: {
            type:dataTypes.DATE
        },
        deletedAt : {
            type:dataTypes.DATE
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
            foreignKey: 'user_id'
        }),
        Post.hasMany(models.Comment, {
            as: 'Comment',
            foreignKey: 'post_id'
        })
        

    }  

    
   

    return Post; 
    
}