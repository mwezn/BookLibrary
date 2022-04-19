const express = require('express');
const router = express.Router();
const authorsController = require('../controllers/authors')

router.get('/', authorsController.index); //Author.all
router.get('/:id',authorsController.show);//Author.findById


module.exports = router;