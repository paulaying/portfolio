const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const { MongoClient } =require("mongodb");
const uri =
 "mongodb+srv://user:user123@memberdata.jyd98v2.mongodb.net/?retryWrites=true&w=majority&appName=memberdata";


 MongoClient.connect(uri,function(err,client){
        if (err) throw err;

        const db =client.db("memberDB");
        const membersCollection = db.collection("members")
    });

app.set("view engine","ejs");
app.set("views","template");

app.use(express.static("refer"));  

app.get("/",function(req,res){
    res.render("02bar",{
        title : "SOMEWHERE",
        path :  "02.css"
    })
});

app.get("/chinese",function(req,res){
    res.render("02barchinese",{
        title : "哪裡",
        path : "02.css"
    })
});

app.get("/login",function(req,res){
    res.render("03login",{
        title : "Member Log In",
        path : "03.css"
    })
});

// app.post("/signin",function(req,res){

// })

// app.post("/signup",async(req,res)=>{
//     const newMember = {
//         name : req.body.name,
//         email : req.body.email,
//         password : req.body.password,
//         confrimpassword : req.body.confrim,
//         birthday : req.body.birthday,
//         phonenumber : req.body.cellphone
//     };
//     if (newMember.password != newMember.confrimpassword) {
//         res.render("05error",{
//             title : "ERROR",
//             path : "03.css",
//             error : "密碼輸入不相同唷"
//         })};
    
//     try{
//         const exist = await membersCollection.findOne({
//             email : newMember.email
//         });
//         if (exist) {
//             res.render("05error",{
//                 title : "ERROR",
//                 path : "03.css",
//                 error :"這個帳號已經註冊過了唷"
//             })};
//         const result = await membersCollection.insertOne(newMember);
//         console.log("會員註冊成功");
//         res.redirect("./member");
//     } catch (error) {
//         res.status(500).send(error);}
// });

app.get("/member",function(req,res){
    // if 
    
    res.render("04member",{
        title : "會員頁面",
        path : "04.css"
    });
})

app.get("/menu",function(req,res){
    res.render("04menu",{
        title : "MENU",
        path : "04.css"
    })
})



module.exports = app;