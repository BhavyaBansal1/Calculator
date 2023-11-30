const express = require('express');
const app = express();
const port = 8050;
const path = require('path');
// const ejs = require('ejs-mate');


app.set("view engine",'ejs')
// app.engine('ejs','ejs-mate')
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));



// app.use((req,res)=>{
//     res.sendFile(path.join(__dirname,'views'));
// })
// app.use((req,res)=>{
//     res.sendFile(path.join(__dirname,'index.ejs'));

// })
app.get('/',(req,res)=>{
    res.render('api');
    // res.render('public');
})

app.listen(port,()=>{
    console.log(`live at ${port}`);
})
