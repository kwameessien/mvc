// require express and it's router component
const express = require('express');

const router = express.Router();

// require the middlewares and callback functions from the controller directory
const {
  create,
  expenseById,
  read,
  update,
  remove,
  expenseByDate,
} = require('../controllers');
// Create POST route to create an expense
router.post('/expense/create', create);
// Create GET route to read an expense
router.get('/expenss/:id', expenseById, read);
// Create PUT route to update an expense

// Create DELETE route to remove an expense

// Create GET route to read a list of expenses

module.exports = router;
