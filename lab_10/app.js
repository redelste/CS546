const express = require("express");
const bodyParser = require("body-parser");
// const handbar = require("express-handlebars");
const cookie = require("cookie-parser");
const bcrypt = require("bcrypt");
const path = require("path");
const app = express();
const users = require("./users")


var currentUser = "";
app.use(bodyParser.json());
app.use(cookie());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", (req, res) => {
//go to static html file
  if(req.cookies.AuthCookie){
    res.sendFile(path.resolve("public/private.html"))
  }
  res.sendFile(path.resolve("public/login.html"))
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  if(username === ""){
    res.sendFile(path.resolve("public/loginError.html"))
  }
  else {
    currentUser = username;
    const pash = users.getPash(username);
    bcrypt.compare(req.body.password, pash, function(err, result) {
      if(!result){
          res.sendFile(path.resolve("public/loginError.html"))
      }
      else {
        res.cookie("AuthCookie", username);
        res.redirect('/private');
      }
    });
  }
});

app.use("/private", (req, res, next)=>{
  if(!(req.cookies.AuthCookie)){
    res.status(403).send("Unauthorized: Already Logged in");
    res.redirect("/");
  }
  next();
})



app.get("/login", (req,res) =>{
  res.sendFile(path.resolve("public/login.html"))
})
app.get("/logout", (req,res) => {
  res.clearCookie("AuthCookie");
  currentUser =="";
  res.sendFile(path.resolve("public/logout.html"));
});


app.get("/private", (req,res) => {
  if(currentUser == "lemon"){
      res.sendFile(path.resolve("public/content/ll.html"));
  }
  else if(currentUser == "masterdetective123"){
      res.sendFile(path.resolve("public/content/sh.html"));
  }
  else if(currentUser = "theboywholived"){
      res.sendFile(path.resolve("public/content/hp.html"));
  }

});


app.listen(3000, function() {
    console.log("Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it");
    if (process && process.send) process.send({done: true}); // ADD THIS LINE
});
