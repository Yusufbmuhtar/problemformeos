const ElementModel = require('../models/ElementModel');
const OptionModel = require('../models/OptionModel');

class ElementService {
  async createElement(data) {
    const { label, elementType, required, order, options, form_id } = data;

    const element = await ElementModel.create({ label, elementType, required, order, form_id });

    if (options && options.length > 0) {
      await OptionModel.bulkCreate(
        options.map((option) => ({ ...option, element_id: element.id }))
      );
    }

    return element;
  }

  async getElementById(id) {
    return await ElementModel.findByPk(id, { include: 'options' });
  }

  // Diğer CRUD işlemleri (güncelleme, silme, listeleme) eklenebilir
}

module.exports = new ElementService();
