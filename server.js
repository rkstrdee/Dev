const express = require('express');
const app = express();
const connectDB = require('./config/db');

//Connect Database
connectDB();

//Init MiddlewARE
//app.use('bosy-parser.json()');  <--- Old Version
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/userdata', require('./routes/api/userdata'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server has started on port ${PORT}`));
