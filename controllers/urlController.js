const bcrypt = require('bcrypt-nodejs')
const db = require('../models')
const Url = db.Url

const userController = {
  urlPage: (req, res) => {
    return res.render('url')
  },


  shortenUrl: (req, res) => {
    let randomstring = Math.random().toString(36).slice(-5);
    let shorten = req.protocol + '://' + req.get('host') + '/' + randomstring;
    Url.findOne({ where: { shorten: shorten } }).then(short => {
      if (short) {
        req.flash('error_messages', 'Shorten Url redondant！')
        return res.redirect('url')
      } else {
        Url.create({
          origin: req.body.origin,
          shorten: shorten,
        })
        return res.render('shorten', { shorten: shorten })
      }
    })
  },

  showurlPage: (req, res) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
    console.log(fullUrl)
    Url.findOne({ where: { shorten: fullUrl } }).then(short => {
      if (short) {
        return res.redirect(short.origin)
      } else {
        req.flash('error_messages', "Shorten Url doesn't exist！")
        return res.redirect('url')
      }
    })
  }

}

module.exports = userController
