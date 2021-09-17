const {DataTypes}=require ('sequelize')

module.exports=function(sequelize){
    return sequelize.define('TypeDiet',{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }
         
    })
}