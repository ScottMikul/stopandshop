
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

    },
    img_url:{
      type:DataTypes.STRING,
      allowNull:false,
      allowEmpty:false
    }
  });
  
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  return product;
};
