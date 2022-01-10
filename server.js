require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use(express.static('public'));
app.use('/api/users', require('./routes/users'));

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});