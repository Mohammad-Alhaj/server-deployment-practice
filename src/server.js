'use strict';
const express = require('express');
const app = express();
const stamper =require('../meddliwares/stamper');
const errorPageNotFound = require('../handlers/404');
const errorServer  = require('../handlers/500');


app.get('/',(req,res)=>{

    res.status(200).send('hello');

});

app.get('/data',(req,res)=>{
res.json({
    id: 1,
    name: 'mohammad',
    email: 'mohammad@gmail.com'
})
});

app.get('/test',stamper,(req,res)=>{
    res.json({
        id: 2,
        name: 'test',
        email: 'mohammad.test@gmail.com',
        time : req.timeStamp
    });
    });
    
app.get('/bad',(req,res)=>{

    let num = 20 ;
    let result = num.map(element=> element)

    res.status(500).send(result);
})

app.use ('*',errorPageNotFound);
 app.use(errorServer)




function start(port) {
    app.listen(port, () => {
        console.log(`i'm listening on port${port}`);
    });
}
module.exports = {
    app: app,
    start: start,
}