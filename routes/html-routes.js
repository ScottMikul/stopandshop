// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
let isAuthenticated = require("../config/middleware/isAuthenticated");

const db = require("../models");


function isAdmin(req,res, next){
  console.log("chekcin if is an admin");
  if(req.user){
    if(req.user.isAdmin){
      console.log("is Logged in user");
    }
    
  }else{
    console.log("couldn't find user");
  }
  next();
}

module.exports = function(app) {

  app.get("/", async (req, res) => {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    const products = await db.Product.findAll();
    const items = products.map(item =>  {return {
      id:item.id,
      quantity: item.quantity,
       item_explanation: item.item_explanation,
        item_header:item.item_header,
         item_price:item.item_price}
      });

    // console.log(products);
    res.render("index", {items:items});
  });

  app.get("/admin/products", isAdmin, (req,res)=>{
    res.send("success");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("members");
    // res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  // creating rouate for Item-Info html page when you click on each item 
  app.get("/item/:id", (req, res) => {
    let id =req.params.id;
    let findItem = db.Product.findOne({where: { id: `${id}` }}).then(function(item) {
      
      // console.log("item --->>>",item);
      let itemInfo={
        id:item.id,
        item_header:item.item_header,
        item_price:item.item_price,
        item_explanation:item.item_explanation,
        quantity:item.quantity
      }
      
      res.render("itemInfo", {item:itemInfo});
    });
       
  });
 
  // creating the route for sending the view for add item
  app.get("/index/additem",(req,res)=>{
    res.render("admin");
  })





};
