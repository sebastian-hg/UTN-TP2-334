const express = require('express');
const router = express.Router();
const ventaControlador = require('../controlador/ventaControlador');

router.post('/ventas', ventaControlador.registrarVenta);
router.get('/ventas/:id', ventaControlador.ventaPorId);
router.post('/imprimir/:id', ventaControlador.imprimirFactura); 


module.exports = router;
