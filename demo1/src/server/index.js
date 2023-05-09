const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const FormRoutes = require('./routes/FormRoutes');
const ElementRoutes = require('./routes/ElementRoutes');
const OptionRoutes = require('./routes/OptionRoutes');

// Database bağlantısı
const sequelize = require('./config/database');
sequelize.sync();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route'lar
app.use('/api/forms', FormRoutes);
app.use('/api/elements', ElementRoutes);
app.use('/api/options', OptionRoutes);

// Hatalar için genel middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Bir hata oluştu!');
});

// Sunucuyu başlat
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
