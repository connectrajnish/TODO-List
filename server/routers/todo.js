const express = require('express');
const router = express.Router();

router.get('/');    //to read all the TODO
router.post('/');   //to post a new TODO
router.put('/:id'); //to update a TODO
router.delete('/:id');  //to delete a TODO

module.exports = router;