var express = require('express');
var router = express.Router();
const Model = require('../../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  Model.Item.findAll({include:[Model.Category]}).then(function(items){
    res.render('item/index', { title: 'Express', items: items});
  })
});

router.get('/new', function(req, res, next) {
  Model.Category.findAll().then(function(categories){
    res.render('item/new', {title : 'Create New Product', categories: categories, notif : ''})
  })
})

router.post('/createNewProduct', function(req, res, next) {
  if (req.body.category === "" && req.body.product_name == "" && req.body.quantity == "") {
    res.render('item/new', {notif: 'isi dong cuy', title : 'Create New Product', categories: []})
  } else {
    Model.Item.create({
      product_name : req.body.product_name,
      quantity : req.body.quantity,
      CategoryId : req.body.category
    }).then(function(){
      res.redirect('/items')
    })
  }
})

router.get('/delete/:id', function(req, res, next) {
  Model.Item.destroy({where:{id : req.params.id }}).then(function(){
    res.redirect('/items')
  })
})

router.get('/edit/:id', function(req, res, next) {
  Model.Item.findById(req.params.id).then(function(item){
    Model.Category.findAll().then(function(categories){
      res.render('item/edit', {title : 'Create New Product', categories: categories, item: item })
    })
  })
})

router.post('/update/:id', function(req, res, next) {
  Model.Item.destroy({where:{id : req.params.id }}).then(function(){
    res.redirect('/items')
  })
})


module.exports = router;
