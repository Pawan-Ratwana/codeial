const express =   require('express');
const app     =   express()
const port    =   8000;
// to require the cookies
const cookieParser=require('cookie-parser')

// to require layouts
const expressLayouts=require('express-ejs-layouts')
const db=require('./config/mongoose')

// reading post request
app.use(express.urlencoded());
// use cookies
app.use(cookieParser());
app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//  use express router
app.use('/',require('./routes'))

//setup the view engine
app.set('view engine','ejs');
app.set('views','./views')

app.listen(port, (err)=>{
        if(err){
            // interpolution method and the key ` this is bactics`
            console.log(`Error in running the server : ${err}`);
        }
        console.log(`Serever is running on port: ${port}`);
})
// checkup of commit