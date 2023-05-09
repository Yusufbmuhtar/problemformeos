const express = require('express');
const OptionController = require('../controllers/OptionController');
const router = express.Router();

router.post('/', OptionController.createOption);

// Diğer işlemler için route'lar (güncelleme, silme, listeleme, vb.) eklenebilir

module.exports = router;
