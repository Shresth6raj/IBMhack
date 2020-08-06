const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{ res.render('landingPage') })

router.get("/signup",(req,res)=>{res.render('sign_up');})

router.get("/login",(req,res)=>{res.render('log_in');})

router.get("/product",(req,res)=>{res.render('enter_your_item_details');})

router.get("/service",(req,res)=>{res.render('enter_your_service_details');})

router.get('/products', (req,res) => {res.render('items_available');})

router.get('/services', (req,res) => {res.render('services_available');})

router.get('/order/:id',(req,res) => {res.render('date_time');});


router.get('/profile', (req,res) => {
    console.log(req.user);
    res.render('profile_page',{user: req.user})
});

module.exports=router;