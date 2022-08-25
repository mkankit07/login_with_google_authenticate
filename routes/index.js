const express=require('express');
const router= express.Router()
const userRouute= require("./userRoute")
const passport=require("passport");
const client_url='http://localhost:3000/'

router.use("/", userRouute)

router.get("/login/success",(req,res)=>{
    if(req.user){
        res.send(200).json({
            message: "sucess",
            success:true,
            user: req.user
        })
    }

})

router.get("/login/failed",(req,res)=>{
    res.send(401).json({
        message: "failure",
        success:false,
    })
})

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

router.get('/google/callback', passport.authenticate('google', { successRedirect:client_url,failureRedirect: '/login/failed'}),
  function(req, res) {
    res.redirect('/login/success');
  });

module.exports = router