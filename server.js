require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { connectDB } = require('./database/config');

const app = express();

const PORT = process.env.PORT;

// Database 
connectDB();

app.use(cors());
app.use(express.json());

app.use(express.static('public'));
app.use('/api/users', require('./routes/users'));

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});