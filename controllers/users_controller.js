const User = require('../models/user');

module.exports.profile =async (req, res) => {
    // // 1st work 
    // return res.render('user_profile', {
    //     title: "User Profile"   
    // })

    try{
        // check the user_id in cookie
        if(req.cookies.user_id){
            // find the user
            const user=await User.findById(req.cookies.user_id);
            // if user is found then redirect to the profile page 
           if(user){
            return res.render('user_profile',{
                title:'User Profile',
                user:user 
            })
        }
        // if user not found then redirect to the sign in page
        console.log("user not found");
        return res.redirect('/users/sign-in');
    }else{
        // user not in cookies
        console.log("user not in cookies");
        return res.redirect('/users/sign-in');
    }
}catch(err){
            console.log("Error finding user");
            return res.redirect('/users/sign-in');
}
}
    


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
module.exports.createSession = async (req, res) => {
     // steps to authenticate
    try{
        // find the user 
        const user=await User.findOne({email: req.body.email});
        // handle user found 
        if(user){
            // handle password which doesnot match
            if(user.password != req.body.password){
                return res.redirect('back');
            }
            // handle session creation
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile')
        }else{
            // handle user not found 
            return res.redirect('back');
        }
    }catch(err){
        console.log('Error in finding/creating of signing in')
        return ;
    }
}