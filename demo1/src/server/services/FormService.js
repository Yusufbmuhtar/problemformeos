const FormModel = require('../models/FormModel');
const ElementModel = require('../models/ElementModel');

class FormService {
  async createForm(data) {
    const { title, description, elements } = data;

    const form = await FormModel.create({ title, description });

    if (elements && elements.length > 0) {
      await ElementModel.bulkCreate(
        elements.map((element) => ({ ...element, form_id: form.id }))
      );
    }

    return form;
  }

  async getFormById(id) {
    return await FormModel.findByPk(id, { include: 'elements' });
  }

  // Diğer CRUD işlemleri (güncelleme, silme, listeleme) eklenebilir
}

module.exports = new FormService();
