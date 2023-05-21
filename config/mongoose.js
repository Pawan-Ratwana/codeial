const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/codeial_development');

//  connecting to database
const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

db.once('open',()=>{
    console.log('Connected to database: MongoDB');
});

module.exports=db;