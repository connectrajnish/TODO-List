const express = require('express');
const router = express.Router();

const {
    getAllTODO,
    postCreateTODO,
    putUpdateTODO,
    deleteTODO,
} = require("../controllers/todo");

router.get('/', getAllTODO);    //to read all the TODO
router.post('/', postCreateTODO);   //to post a new TODO
router.put('/:id', putUpdateTODO); //to update a TODO
router.delete('/:id', deleteTODO);  //to delete a TODO

module.exports = router;