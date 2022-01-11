const express = require('express');
const router = express.Router();
const characters = require('./data.json')

router.get('/:characterId', (req, res, next) =>{
   const id = req.params.characterId
   res.send(characters.filter( (character) => character.id == id))

})

module.exports = router;

