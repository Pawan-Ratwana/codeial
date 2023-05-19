const express =   require('express');
const app     =   express()
const port    =   8000;

app.use('/',require('./routes'))


app.listen(port, (err)=>{
        if(err){
            // interpolution method and the key ` this is bactics`
            console.log(`Error in running the server : ${err}`);
        }
        console.log(`Serever is running on port: ${port}`);
})
// checkup of commit