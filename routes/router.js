const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');
const {check, validationResult}=require('express-validator');
const {homeRoute,add_user,update_user}=require('../controllers/controller');
const {getAllUser,getUser,createUser,updateUser,deleteUser}=require('../controllers/backendController');
const urlencodedParser=bodyParser.urlencoded({extended:false});


router.get('/',homeRoute);
router.get('/add-user',add_user);
router.get('/update-user',update_user);



router.route('/api/users')
    .get(getAllUser)
    .post(urlencodedParser,createUser);

router.route('/api/users/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports=router;