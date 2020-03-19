// Requiring our models and passport as we've configured it
const db = require("../models");
let passport = require("../config/passport");
const path = require("path");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
        // console.log("user created !");
        // res.sendStatus(200);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used in client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  //incase we need the front end to get a list of all of the products
  // app.get("/api/products", async (req, res) => {
  //   const products = await db.Product.findAll();
  //   res.json(products);
  //   //res.redirect("/members");
  //   res.status(200);
  //   // res.send("Success");
  // });

  app.post("/api/products", async (req,res)=>{
    
    const newProduct = req.body;
    
    

 
  
    // incase we want to try to add files uncomment this.

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    //let img_url = req.files.img_url;
  
    // Use the mv() method to place the file somewhere on your server
    // console.log(path.join(__dirname,`/public/assets/img/upload/`,img_url.name));
    // img_url.mv(path.join(__dirname,`/public/assets/img/upload/`,img_url.name), async function(err) {
    //   if (err)
    //     return res.status(500).send(err);
    // newProduct.img_url = img_url.name;

    await db.Product.create(newProduct);
    res.status(200);
    res.redirect("/admin/products");
    //});
  });


  // creatin route for adding new item to the database
  // app.post("/index/additem" , async(req,res)=>{
  //   let{item_header,item_price,item_explanation,quantity}=req.body;
  //   await db.Product.create({item_header,item_price,item_explanation,quantity});
  //   res.status(200);
  //   await alert("Success");
  //   res.redirect("/index/additem");
  // });
 
};
