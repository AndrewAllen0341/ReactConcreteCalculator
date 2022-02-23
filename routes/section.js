const express = require('express');
const router = express.Router();
const { getSection, addSection, deleteSection } = require('../controllers/section');

router
    .route('/')
    .get(getSection)
    .post(addSection);

router
    .route('/:id')
    .delete(deleteSection);

module.exports = router;