const express = require('express');

const router = express.Router();
// Acess the home controller  from home_controller
const homeController=require('../controllers/home_controller')

router.get('/',homeController.home)
router.use('/users/',require('./users'))

module.exports=router;