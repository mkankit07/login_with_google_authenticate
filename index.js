const express=require('express');
require('dotenv').config()
const db=require("./connections/db")
const routes= require("./routes")
const cors=require("cors")
const cookieSession= require("cookie-session")
const session = require("express-session")
const passport=require("passport")
const google=require("./googleAuth")
const app=express();

// app.use(
//     session({
//       secret: "keyboard",
//       resave: false,
//       saveUninitialized: true
//     })
//   );
app.use(session({
  secret: 'somethingsecretgoeshere',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

// app.use(cookieSession({
//   name:"session",
//   keys:["ankit"],
//   maxAge:24*60*60*100
// }))
app.use(passport.session());
app.use(passport.initialize());
app.use(cors({
  origin:"https://localhost:3000",
  credentials: true,
  methods:"GET ,POST,DELETE"
}))



app.use(express.json());
app.use("/",routes)
const PORT=7000||process.env.PORT

// app.use(
//     session({
//       secret: "keyboard cat",
//       resave: false,
//       saveUninitialized: true
//     })
//   );
  
//   app.use(passport.initialize());
  
// //   app.use(passport.session())

// app.get('/',(req,res)=>{
//     res.send('<a href="/auth/google">Authenticate With Google</a>')
//   })

// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile','email'] }));
  
// app.get('/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/login'}),
//   function(req, res) {
//     res.redirect('/logout');
//   });

// app.get('/logout', function(req, res){
//     cookie = req.cookies;
//     for (var prop in cookie) {
//         if (!cookie.hasOwnProperty(prop)) {
//             continue;
//         }    
//         res.cookie(prop, '', {expires: new Date(0)});
//     }
//     res.redirect('/');
// });

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})