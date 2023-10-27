const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

// Crear una nueva reserva
router.post('/', async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).send(booking);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Actualizar una reserva
router.put('/:id', async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!booking) res.status(404).send('Reserva no encontrada');
        res.send(booking);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Buscar una reserva
router.get('/:id', async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) res.status(404).send('Reserva no encontrada');
        res.send(booking);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Eliminar una reserva
router.delete('/:id', async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        if (!booking) res.status(404).send('Reserva no encontrada');
        res.send(booking);
    } catch (error) {
        res.status(400).send(error);
    }
});



module.exports = router;
