const router = require('express').Router();
const notes = require('./notesroutes');


router.use('/notes', notes);

module.exports = router;