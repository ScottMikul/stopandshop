
module.exports = function(sequelize, DataTypes) {
  const product = sequelize.define("Product", {
    
    item_header: {
      type: DataTypes.STRING,
      allowNull: false,
      allowEmpty:false
    },
    
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
  
  
  return product;
};
