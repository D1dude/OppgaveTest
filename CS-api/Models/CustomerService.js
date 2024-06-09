module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');
    const CustomerService = sequelize.define('customerService', {
        customerId: {
            type: DataTypes.STRING,
        },
        serviceId: {
            type: DataTypes.STRING,
        }
    });

    return CustomerService;
};