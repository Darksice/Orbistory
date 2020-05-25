const express = require('express')
const cors = require('cors')


const app = express()


const bdd = require('./bdd')


// var allowCrossDomain = function(req,res,next){
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//     next();
// }


//app.use(allowCrossDomain);


app.get('/api/pays',cors(),async(req,res,next) => {
    try{
        bdd.getPays().then(response => {
        console.log("je suis dans la route");
        console.log(response);
        res.status(200).send(response);
        })
    
    } catch(err){
       next(err);
    }
})

const PORT = process.env.PORT || 5000
app.listen(PORT,() =>{
    console.log(`App running on port ${PORT}.`)
})