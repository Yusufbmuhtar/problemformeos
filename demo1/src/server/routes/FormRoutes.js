const express = require('express');
const FormController = require('../controllers/FormController');
const router = express.Router();

router.post('/', FormController.createForm);

// Diğer işlemler için route'lar (güncelleme, silme, listeleme, vb.) eklenebilir

module.exports = router;
