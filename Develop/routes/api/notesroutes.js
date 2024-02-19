const router = require('express').Router();

const { readFromFile, readAndAppend } = require('../../helpers/ntUtils');

//GET route for retrieving all the feedback
router.get('/', (req, res) => {


    res.status(200).json(readFromFile());


    
        return;

  });
  //POST route for submitting the notes
  router.post('/savenotes', (req, res)=>{
    console.info(` request received to submit notes`);

    res.status(200).json(readAndAppend(req.body.title, req.body.text));
  });

  module.exports = router;