let express=require("express");
let sql=require("mysql");
let app=express();
let conexion = sql.createConnection({
host: "localhost",
database: "tutoriales",
user: "root",
password:""
});

app.get("/usuarios",(req,res)=>{
    let quer="SELECT * FROM usuarios"
    
    conexion.quer(sql,function(error,Results,fields){
        if(error){
            throw error;
        }
        for(var i in Results){
            console.log(`nombre${Results[i].nombre}`)
        }
        res.send("consulta exito")
    });
    });





