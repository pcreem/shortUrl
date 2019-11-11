const urlController = require('../controllers/urlController.js')

module.exports = app => {
  // 如果使用者訪問首頁，就導向 /restaurants 的頁面
  app.get('/', (req, res) => res.redirect('url'))
  app.get('/url', urlController.urlPage)
  app.post('/url', urlController.shortenUrl)
  app.get('/\*{5}', urlController.showurlPage)
}
