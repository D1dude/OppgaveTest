const express = require('express');
const router = express.Router();
const { CustomerService } = require('../Models'); // Endret dette for å importere CustomerService fra Models

// GET all customer-service connections
router.get('/', async (req, res) => {
  try {
    const customerServices = await CustomerService.findAll();
    res.json(customerServices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create a new customer-service connection
router.post('/', async (req, res) => {
  try {
    const { customerId, serviceId } = req.body;
    const customerService = await CustomerService.create({ customerId, serviceId });
    res.status(201).json(customerService);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT update an existing customer-service connection
router.put('/:id', async (req, res) => {
  try {
    const customerService = await CustomerService.findByPk(req.params.id);
    if (customerService) {
      const { customerId, serviceId } = req.body;
      await customerService.update({ customerId, serviceId });
      res.json(customerService);
    } else {
      res.status(404).json({ error: 'CustomerService not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a customer-service connection
router.delete('/:id', async (req, res) => {
  try {
    const customerService = await CustomerService.findByPk(req.params.id);
    if (customerService) {
      await customerService.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'CustomerService not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all customer-service connections for a specific customer
router.get('/customer/:customerId', async (req, res) => {
  try {
    const customerId = req.params.customerId; // Henter customerId fra URL-en
    const customerServices = await CustomerService.findAll({ where: { customerId } });
    res.json(customerServices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
