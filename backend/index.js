const express = require('express');
const app = express();
const path = require('path');
if (process.env.NODE_ENV !== 'production')
  require('dotenv').config({ path: path.join(__dirname, 'config/config.env') });
else require('dotenv').config();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');
require('colors');
const morgan = require('morgan');
const fs = require('fs');
const errorHandler = require('./Middleware/errorHandler');

//other const
const optionsCors = {
  // origin: process.env.CLIENT_URL,
  // origin: 'http://localhost:8000',
  //add more origins
  // origin: ['http://localhost:3000', process.env.CLIENT_URL],
  origin:
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:8000'
      : process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
};

app.get('/', (req, res) => {
  res.send('Backend is running');
});

//Middlewares
app.use(express.json());
app.use(cors(optionsCors));
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Routes
// app.use('/', require('./Routes/userRoutes'));

// fs.readdirSync('./Routes')
// console.log(fs.readdirSync('./Routes'));
// fs.readdirSync('./Routes')
fs.readdirSync('./Routes').map((route) => {
  app.use('/api/v1', require(`./Routes/${route}`));
});
app.use(errorHandler);

//Connect to MongoDB
mongoose
  .connect(process.env.MONGO, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'.bgGreen))
  .catch((err) =>
    console.log(`MongoDB Connection Error: ${err.message}`.bgRed)
  );

//Connect to Express Server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`.bgBlue);
});
