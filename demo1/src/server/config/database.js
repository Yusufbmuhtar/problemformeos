const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testdenemedb', 'yusuf', '2812', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: false
});

sequelize.authenticate()
  .then(() => {
    console.log('MySQL bağlantısı başarılı');
  })
  .catch(err => {
    console.error('MySQL bağlantısı başarısız:', err.message);
  });

module.exports = sequelize;
