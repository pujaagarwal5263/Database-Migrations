const express=require("express");
const cron=require("node-cron");
const shell=require("shelljs")

const {sequelize}=require("./db-connection")
require("./models/user");
const Router=require("./routes/router")

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(Router)

cron.schedule("10 * * * * *",()=>{
    console.log(Date.now());
    console.log("cron job execution");
})

sequelize.sync({alter:true}).then(()=>{
    console.log("Syncing Complete");
}).catch((err)=>{
   console.log(err);
})

app.listen(3000,()=>{
    console.log("Server is running");
})
