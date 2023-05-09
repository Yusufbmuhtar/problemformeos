const ElementService = require('../services/ElementService');

class ElementController {
  async createElement(req, res) {
    try {
      const newElement = await ElementService.createElement(req.body);
      res.status(201).json({ message: 'Element başarıyla eklendi', element: newElement });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Diğer işlemler için fonksiyonlar (güncelleme, silme, listeleme, vb.) eklenebilir
}

module.exports = new ElementController();
