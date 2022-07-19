const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();

const { authenticate } = require('./middleware');

dotenv.config();

// Route Imports
const userRouter = require('./routes/user');
const unitRouter = require('./routes/unit');
const categoryRouter = require('./routes/category');
const supplierRouter = require('./routes/supplier');
const productionBoardRouter = require('./routes/productionBoard');
const formulaRouter = require('./routes/formula');
const materialRouter = require('./routes/material');
const productRouter = require('./routes/product');
const productionRouter = require('./routes/production');
const authRouter = require('./routes/auth');
const tokenRouter = require('./routes/token');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Serve static files in staging
if (process.env.NODE_ENV === 'staging') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// Use Routes
app.use('/api/user', authenticate, userRouter);
app.use('/api/units', authenticate, unitRouter);
app.use('/api/categories', authenticate, categoryRouter);
app.use('/api/suppliers', authenticate, supplierRouter);
app.use('/api/boards', authenticate, productionBoardRouter);
app.use('/api/formulas', authenticate, formulaRouter);
app.use('/api/materials', authenticate, materialRouter);
app.use('/api/products', authenticate, productRouter);
app.use('/api/productions', authenticate, productionRouter);
app.use('/api/token', tokenRouter);
app.use('/api/auth', authRouter);

// General 404 error handler
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// General error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      status: 'error',
      message: error.message,
      type: error.type,
    },
  });
});

module.exports = app;
