const express = require('express');
const app = express();
const port = 8050;


app.use((req,res)=>{
    res.sendFile('index.html');
})



app.listen(port,()=>{
    console.log(`live at ${port}`);
})
