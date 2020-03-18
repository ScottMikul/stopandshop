
module.exports = function(sequelize, DataTypes) {
  const product = sequelize.define("Product", {
    // The email cannot be null, and must be a proper email before creation
    item_header: {
      type: DataTypes.STRING,
      allowNull: false,
      allowEmpty:false
    },
    // The password cannot be null
    item_price: {
      type: DataTypes.DOUBLE(5,2),
      allowNull: false,
      allowEmpty:false
    },
    item_explanation:{
        type: DataTypes.STRING,
        allowNull:false,
        allowEmpty:false

    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull:false,
        allowEmpty:false

    }
  });
  //  adding some data to the products table 
  // let newProduct={
  //   item_header:"HDMI Cable",
  //   item_price:18,
  //   item_explanation:"High qulity material HDMI cable",
  //   quantity:7
  // }
  // product.create(newProduct).then(function(data){
  //       console.log(data);
    
  //   })
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  return product;
};
