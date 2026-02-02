const express = require('express');
const cors = require('cors');

const productosRoutes = require('./routes/productos.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// RUTA RAÍZ
app.get('/', (req, res) => {
    res.send('🚀 API Asadero Ruta 40 activa');
});

// RUTAS
app.use('/productos', productosRoutes);

app.listen(PORT, () => {
    console.log(`API corriendo en puerto ${PORT}`);
});
