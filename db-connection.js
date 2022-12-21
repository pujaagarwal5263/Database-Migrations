var Sequelize=require("sequelize");

 const sequelize=new Sequelize("db-Migrations","root","Puja@123",{
    dialect:"mysql",
    host:"127.0.0.1",
    logging:false
});

 const db=sequelize.authenticate().then(()=>{
    console.log("DB Connected Successfully");  
}).catch((err)=>{
    console.log(err);  
})

module.exports={sequelize, db}
