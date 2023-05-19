const express=require('express');
const router=express.Router();
// Acess yhe Users controller from user_controller
const usersController=require('../controllers/users_controller');

router.get('/profile',usersController.profile);

module.exports=router;