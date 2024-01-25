// //This enables routing in this file.
// const router = require('express').Router();
// //This is importing the api folder
// const apiRoutes = require('./api');
// //define initial route of api and import the index file from the api folder
// router.use('/api', apiRoutes);

// module.exports = router;

const express = require('express');

const notesroutes =  require('./notesroutes');

const app = exrpess();

app.use('/notes', notesroutes);

module.exports = app;