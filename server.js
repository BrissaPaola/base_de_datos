const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/orders');
const cardRoutes = require('./routes/cards');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cards', cardRoutes);

app.get('/api', (req, res) => res.json({ message: 'API REST de ventas funcionando' }));

app.use((req, res) => {
    res.status(404).json({ message: 'Recurso no encontrado' });
});

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
