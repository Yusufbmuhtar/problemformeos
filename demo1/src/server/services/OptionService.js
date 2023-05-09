const OptionModel = require('../models/OptionModel');

class OptionService {
  async createOption(data) {
    const { label, value, element_id } = data;
    return await OptionModel.create({ label, value, element_id });
  }

  async getOptionById(id) {
    return await OptionModel.findByPk(id);
  }

  // Diğer CRUD işlemleri (güncelleme, silme, listeleme) eklenebilir
}

module.exports = new OptionService();
