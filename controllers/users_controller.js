const User = require('../models/user');

module.exports.profile = (req, res) => {
    return res.render('user_profile', {
        title: "User Profile"
    })
}

// render the sign Up  page 
// module.exports.signUp=(req,res)=>{
//     return res.render('user_sign_up',{
//         title:"Codeial | Sign Up"
//     })
// }
module.exports.signUp = function (req, res) {
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
}

//  Render the sign In Page
module.exports.signIn = (req, res) => {
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}

// get the sign up data
module.exports.create = async (req, res) => {
    //check the password & confirm password is same or not
    if(req.body.password != req.body.confirm_password){ 
     // and return to same page i.e. sign up
        return res.redirect('back');
    }

    try{
        
    //find the email is present or not
   const user=await User.findOne({ email: req.body.email }); 
   
   // if  there is no user then creating a new user
    if (!user) {
    // create a new user    
       const newUser=await User.create(req.body);  
     // create a new user and return the sign in page         
        return res.redirect('/users/sign-in');  
    } else {
    // if user exist then redirect back    
        return res.redirect('back'); 
    }
}catch(err){
     console.log("Error in creating the user in signing up");
    //   return res.status(500).send("Internal Server Error"); 
    return;
}
};

// sign in and create a session for user
module.exports.createSession = (req, res) => {
    // TODO later 
}