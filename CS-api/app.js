const express = require('express');
const cors = require('cors'); // Legg til denne linjen
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors()); // Legg til denne linjen for å aktivere CORS-støtte

// Legg til rutene for kunder og serviceordrer
const customersRouter = require('./Routes/customers');
const servicesRouter = require('./Routes/services');
const customerServiceRouter = require('./Routes/customerServiceRouter');

app.use('/customers', customersRouter);
app.use('/services', servicesRouter);
app.use('/customerService', customerServiceRouter);

app.listen(
    PORT,
    () => {console.log(`server kjører på: http://localhost:${PORT}`);
});