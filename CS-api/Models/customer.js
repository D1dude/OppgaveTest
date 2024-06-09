module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
  
    const Customer = sequelize.define('Customer', {
      name: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      },
      orgnr: {
        type: DataTypes.STRING
      },
      tlf: {
        type: DataTypes.STRING
      }
    });
  
    return Customer;
  };