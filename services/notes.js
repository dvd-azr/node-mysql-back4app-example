const express = require('express');
const Note = require('../models/note');

const router = express.Router();

router.get('/', async (req, res) => {
  const notes = await Note.findAll();
  res.json(notes);
});

router.post('/', async (req, res) => {
  try {
    const result = await Note.create(req.body);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.statusCode(500);
  }
});

module.exports = router;