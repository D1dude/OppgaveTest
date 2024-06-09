const {Sequelize} = require('sequelize');
const config = require('../config.json').development;

const sequelize = new Sequelize(config);

const Customer = require('./customer')(sequelize);
const ServiceOrder = require('./service')(sequelize);
const CustomerService = require('./CustomerService')(sequelize);


sequelize.sync({ alter: true }) // Endre til `sync({ force: true til =  alter: true })` i produksjon
  .then(() => {
    console.log('Database & tables created!');
  });

module.exports = {
  sequelize,
  Customer,
  ServiceOrder,
  CustomerService
};