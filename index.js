const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

// Conexión a MongoDB Atlas
mongoose.connect('mongodb+srv://booking:booking@cluster0.3ijue.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a MongoDB Atlas');
}).catch(error => {
    console.error('Error conectando a MongoDB:', error);
});

app.use(bodyParser.json());

// Rutas
app.use('/api/bookings', bookingRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
