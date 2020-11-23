
const express = require('express');
const router = new express.Router();
import {table} from './bibli.ejs'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Library' });
});

router.get('/books/render', function(req, res, next) {
  res.render('bibli', { title: 'Lancez votre recherche ' });
});


/* POST FORM */
router.post('/books/list',(req ,res, next) => {

 res.render('bibli', {title:'Voici les livres:', table})
} )




module.exports = router;
