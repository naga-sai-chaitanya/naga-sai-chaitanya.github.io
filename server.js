const express = require('express')
const app = express()



//Home Page
app.get('/',(req,res)=>{
    const home = __dirname + '/views' + '/home-page.html';
    res.sendFile(home)
    
})



//Port
app.listen(3856,(err)=>{
    if(err){
        console.log('err')
    }
    else{
        console.log(`Server started on port 3856`);
    }
})