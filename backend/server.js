const express = require("express");
const app = express();

// Importing routes
const apprenant = require("./Routers/apprenants")



// Create a simple route

app.use('/simplonLine/apprenant', apprenant)



//creation du serveur
const PORT=5000
app.listen(PORT,(err)=>{
    if(err)
    {
        console.log('server is not running')}
    else {
        console.log(`server is running on ${PORT}...`)
    }
})