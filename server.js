const express = require("express");
const app = express();
const port = 3000;

app.set("view engine","ejs");
app.set("views","template");
app.use(express.static("refer"));   

const somewhere = require("./bar")

app.get("/",function(req,res) {
    res.render("introduction",{
        title : "About Me",
        path: "01.css"
    })
})

app.use("/somewhere",somewhere)



app.listen(port,function(req,res){
    console.log("伺服器已成功啟動 http://localhost:3000/");
})