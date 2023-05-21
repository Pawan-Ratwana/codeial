const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email:{
        type: String,     // 
        require:true,    // require means that without having an email value user won't be created into the database  
        unique: true    // unique is required because one user create or login only with one email
    },
    password:{
        type: true,
        require: true
    },
    name:{
        type: true,
        require: true
    }
},{
    timestamps: true
});


const User =mongoose.model('user',userSchema);

module.exports=User