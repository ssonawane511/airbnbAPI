const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const data = JSON.parse(fs.readFileSync("data.json").toString())

const port = 1223;
const app = express();

app.get("/",async (req, res) => {
  
console.log("hello from server ");

})

app.get("/home/:homeID", async ( req , res)=> {
 const Id = req.params.homeID;
 const SearchedHomes = data.filter(home => home.homeID === Id);
 console.log(SearchedHomes);
 res.send(SearchedHomes);
})

app.post("/book/:homeID&:Startdate&:Enddate",async (req, res)=> {
    const { homeID:Id, Startdate, Enddate } = req.params;
    let bookingHome = data.filter((home) => home.homeID === Id); ;
    console.log(bookingHome);
    
    if (bookingHome){
        res.json({
          status: "ok",
          Startdate,
          Enddate,
        });

    }
      
});

app.get("/homes", async ( req , res ) => {
   console.log(data);
res.json({
    status:"ok",
    data
})
})

app.listen( port ,  () => {
    console.log("server started at port : " ,port);
})