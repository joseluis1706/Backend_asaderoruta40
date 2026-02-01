const express = require('express');
const cors = require('cors');

// 🔹 IMPORTAR RUTAS
const productosRoutes = require('./routes/productos.routes');

const app = express();
const PORT = 3000;

// ✅ MIDDLEWARES (ORDEN CORRECTO)
app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use(express.json()); // 👈 OBLIGATORIO PARA POST

// ✅ RUTAS
app.use('/productos', productosRoutes);

// ✅ SERVIDOR
app.listen(PORT, () => {
    console.log(`✅ API corriendo en http://localhost:${PORT}`);
});
