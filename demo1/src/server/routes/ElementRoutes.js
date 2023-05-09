const express = require('express');
const ElementController = require('../controllers/ElementController');
const router = express.Router();

router.post('/', ElementController.createElement);

// Diğer işlemler için route'lar (güncelleme, silme, listeleme, vb.) eklenebilir

module.exports = router;
