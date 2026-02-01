const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const FILE = path.join(__dirname, '../data/productos.json');

// 📥 GET productos
router.get('/', (req, res) => {
    try {
        const data = fs.readFileSync(FILE, 'utf8');
        let productos = JSON.parse(data);

        // ✅ Si viene como [[...]] lo corregimos
        if (Array.isArray(productos) && Array.isArray(productos[0])) {
            productos = productos[0];
        }

        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error leyendo productos' });
    }
});

// 💾 POST guardar productos (admin)
router.post('/', (req, res) => {
    console.log('BODY RECIBIDO 👉', req.body);
    try {
        let productos = req.body;

        // ✅ Aseguramos que se guarde como array plano
        if (Array.isArray(productos) && Array.isArray(productos[0])) {
            productos = productos[0];
        }

        fs.writeFileSync(FILE, JSON.stringify(productos, null, 2));
        res.json({ ok: true });
    } catch (error) {
        res.status(500).json({ error: 'Error guardando productos' });
    }
});

module.exports = router;
