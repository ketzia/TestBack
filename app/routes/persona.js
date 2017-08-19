const PersonaController = require('../controllers/persona.controller');
const express = require('express');
const router = express.Router();

router.route('/personas')
    .post(PersonaController.postPersona);

module.exports(router);