const express = require('express');
const router = express.Router();
const {insertContact} = require('../controller/contactcontroller');
const {getuser,userLogout,viewlogin,insertUser,viewsignup} = require('../controller/userController');
const {getallProduct,getProductonly} = require('../controller/productController');
const {userCheckout,userCheckoutSubmit,savePayment,getallorder} = require('../controller/orderController');





router.get('/',getallProduct);

router.get('/login',viewlogin);

router.post('/login',getuser);

router.get('/logout',userLogout);

router.get('/signup',viewsignup);

router.post('/signup',insertUser);

router.post('/save-contact',insertContact);

router.get('/product/:sno',getProductonly);

router.get('/about',(req,res)=>{
    res.render('about.hbs');
});

router.get('/contact',(req,res)=>{
    res.render('contact.hbs');
});

// router.post('/search',searchProduct);

router.get('/checkout/:id',userCheckout);

router.post('/checkout',userCheckoutSubmit);

router.post('/payment',savePayment)

router.get('/allorder',getallorder)

module.exports = router;