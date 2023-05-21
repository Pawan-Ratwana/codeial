module.exports.profile=(req,res)=>{
    return res.render('user_profile',{
        title:"User Profile"
    })
}

// render the sign Up  page 
// module.exports.signUp=(req,res)=>{
//     return res.render('user_sign_up',{
//         title:"Codeial | Sign Up"
//     })
// }
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
}

//  Render the sign In Page
module.exports.signIn=(req,res)=>{
    return res.render('user_sign_in',{
        title:"Codeial | Sign In"
    })
}

module.exports.create=(req,res)=>{
    // TODO later 
}
module.exports.createSession=(req,res)=>{
    // TODO later 
}