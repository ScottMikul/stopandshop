// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
let isAuthenticated = require("../config/middleware/isAuthenticated");

const db = require("../models");


function isAdmin(req, res, next) {


  if (req.user) {
    if (req.user.isAdmin) {
      //redirect to admin page
      next();
    } else {
      res.redirect("/");
    }
  } else {

    //redirect to the index page
    res.redirect("/");

  }
}

module.exports = function (app) {

  app.get("/admin/products", isAdmin, (req, res) => {

    if (req.session.succes) {
      res.render("admin", { name: req.user.name, success: true });
    }
    else if (req.session.error) {
      res.render("admin", { name: req.user.name, error: true });
    }
    else {
      res.render("admin", { name: req.user.name });
    }


  });


  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page

  // adding the route to the member page and poting data in it
  app.get("/", async (req, res) => {
    const products = await db.Product.findAll();
    const items = products.map(item => {
      return {
        id: item.id,
        quantity: item.quantity,
        item_explanation: item.item_explanation,
        item_header: item.item_header,
        item_price: item.item_price,
        img_url: item.img_url
      }
    });

    if (req.user) {
      res.render("index", { items: items, name: req.user.name, isAdmin: req.user.isAdmin });

    } else { res.render("index", { items: items }) }

  });

  // creating rouate for Item-Info html page when you click on each item 
  app.get("/item/:id", (req, res) => {
    let id = req.params.id;
    let findItem = db.Product.findOne({ where: { id: `${id}` } }).then(function (item) {

      let itemInfo = {
        id: item.id,
        item_header: item.item_header,
        item_price: item.item_price,
        item_explanation: item.item_explanation,
        quantity: item.quantity,
        img_url: item.img_url
      }
      if (req.user) {

        res.render("itemInfo", { item: itemInfo, name: req.user.name });
      }
      else {
        res.render("itemInfo", { item: itemInfo });

      }
    });

  });

  // creating the route for sending the view for add item
  app.get("/index/additem", (req, res) => {
    res.render("admin");
  })

  app.get("/cart", (req, res) => {
    if (req.user) {
      res.render("cart", { name: req.user.name, isAdmin: req.user.isAdmin });
    }
    else {
      res.render("cart");
    }
  })

};
