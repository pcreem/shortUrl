const userController = require('../controllers/userController.js')

module.exports = app => {
  // 如果使用者訪問首頁，就導向 /restaurants 的頁面
  app.get('/', (req, res) => res.redirect('signup'))
  app.get('/signup', userController.signupPage)
  app.post('/signup', userController.shortenUrl)
  app.get('/\*{5}', userController.showurlPage)
}
