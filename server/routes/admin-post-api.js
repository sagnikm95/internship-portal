const express = require('express');

const router = express.Router();
const globalSkillsController = require('../controllers/global-skills');
const globalSkillsValidator = require('../validators/global-skills');

// router.post('/profile/CV', globalSkillsValidator.uploadValidation, globalSkillsController.uploadCV);
module.exports = router;