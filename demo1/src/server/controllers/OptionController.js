const OptionService = require('../services/OptionService');

class OptionController {
  async createOption(req, res) {
    try {
      const newOption = await OptionService.createOption(req.body);
      res.status(201).json({ message: 'Option başarıyla eklendi', option: newOption });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Diğer işlemler için fonksiyonlar (güncelleme, silme, listeleme, vb.) eklenebilir
}

module.exports = new OptionController();
