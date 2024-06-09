/*
const express = require('express');
const router = express.Router();
const { ServiceOrder, Customer } = require('../Models');

router.get('/', async (req, res) => {
  const serviceOrders = await ServiceOrder.findAll({ include: Customer });
  res.json(serviceOrders);
});

router.post('/', async (req, res) => {
  const serviceOrder = await ServiceOrder.create(req.body);
  res.json(serviceOrder);
});

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const { ServiceOrder, Customer } = require('../Models');

// GET all service orders
router.get('/', async (req, res) => {
  try {
    const serviceOrders = await ServiceOrder.findAll();
    res.json(serviceOrders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create a new service order
router.post('/', async (req, res) => {
  try {
    const serviceOrder = await ServiceOrder.create(req.body);
    res.status(201).json(serviceOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT update an existing service order
router.put('/:id', async (req, res) => {
  try {
    const serviceOrder = await ServiceOrder.findByPk(req.params.id);
    if (serviceOrder) {
      await serviceOrder.update(req.body);
      res.json(serviceOrder);
    } else {
      res.status(404).json({ error: 'ServiceOrder not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET a single service order by ID
router.get('/:id', async (req, res) => {
  try {
    const serviceOrder = await ServiceOrder.findByPk(req.params.id);
    if (serviceOrder) {
      res.json(serviceOrder);
    } else {
      res.status(404).json({ error: 'ServiceOrder not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE a service order
router.delete('/:id', async (req, res) => {
  try {
    const serviceOrder = await ServiceOrder.findByPk(req.params.id);
    if (serviceOrder) {
      await serviceOrder.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'ServiceOrder not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
