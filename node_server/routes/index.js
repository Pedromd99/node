const express = require('express');
const router = require ('express').Router();

const indexController = require('../controllers/index');

router.get('/', indexController.index);
router.get('/products', indexController.ListofProducts);
router.post('/new-product', indexController.newProduct);


module.exports = router;