module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
  
    const ServiceOrder = sequelize.define('ServiceOrder', {
      description: {
        type: DataTypes.STRING
      },
      date: {
        type: DataTypes.DATE,
      },
      duration: {
        type: DataTypes.FLOAT
      },
      price: {
        type: DataTypes.FLOAT
      }
    });
  
    return ServiceOrder;
  };