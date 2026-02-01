const express = require('express');
const cors = require('cors');

// 🔹 IMPORTAR RUTAS
const productosRoutes = require('./routes/productos.routes');

const app = express();

// ✅ PUERTO COMPATIBLE CON RENDER
const PORT = process.env.PORT || 3000;

// ✅ MIDDLEWARES (ORDEN CORRECTO)
app.use(cors({
    origin: [
        'http://localhost:4200',        // Angular local
        'https://asaderoruta40.com',        // dominio sin www
        'https://www.asaderoruta40.com'     // dominio con www
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json()); // 👈 OBLIGATORIO PARA POST / PUT

// ✅ RUTAS
app.use('/productos', productosRoutes);

// ✅ SERVIDOR
app.listen(PORT, () => {
    console.log(`✅ API corriendo en puerto ${PORT}`);
});
