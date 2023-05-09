const FormService = require('../services/FormService');

class FormController {
  async createForm(req, res) {
    try {
      const newForm = await FormService.createForm(req.body);
      res.status(201).json({ message: 'Form başarıyla eklendi', form: newForm });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Diğer işlemler için fonksiyonlar (güncelleme, silme, listeleme, vb.) eklenebilir
}

module.exports = new FormController();
