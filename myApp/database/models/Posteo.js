module.exports =  function(sequelize, dataTypes) {

    let alias = "Posteo";

    let cols = {
        id : {
            autoIncrement: true,
             primaryKey: true,
             type:dataTypes.INTEGER
        },
        foto : {
            type: dataTypes.STRING(500)
        },
        texto_descriptivo : {
            type: dataTypes.STRING(500)
        },
        id_users : {
            type:dataTypes.INTEGER(10)
        },
        created_at : {
            type:dataTypes.DATE
        },
        updated_at: {
            type:dataTypes.DATE
        },
       user_id: {
           type:dataTypes.INTEGER
       },
       
   
    };

    let config = {
        tableName : "posts",
        timestamps : false,
        underscored : true
    }

    let Posteo = sequelize.define(alias, cols, config);



    Posteo.associate = function(models){

        Posteo.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'id_users'
        }),  
        Posteo.hasMany(models.Comment, {
            as: 'comments',
            foreignKey: 'id_posts'
        })
        

    }  
    
    return Posteo; 
    
}

