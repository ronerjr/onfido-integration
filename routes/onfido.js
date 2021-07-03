var express = require('express');
var router = express.Router();
const onfidoConfig = require('../configs/onfido.config');
const onfidoClient = onfidoConfig.setup();

/* GET users listing. */
router.post('/applicant', async (req, res, next) => {
  try {
    const applicant = await onfidoClient.applicant.create(req.body);
    res.send(applicant);
  } catch (error) {
    console.log(error.message);
    res.send(error);
  }
});

router.get('/check/:id', async (req, res, next) => {
  try {
    const check = await onfidoClient.check.find(req.params.id);
    res.send(check);
  } catch (error) {
    console.log(error.message);
    res.status(error.statusCode);
    res.send(error.responseBody);
  }
});

router.get('/check', async (req, res, next) => {
  try {
    const check = await onfidoClient.check.list(req.query.applicant_id);
    res.send(check);
  } catch (error) {
    console.log(error.message);
    res.status(error.statusCode);
    res.send(error.responseBody);
  }
});


router.post('/check', async (req, res, next) => {
  try {
    const check = await onfidoClient.check.create(req.body);
    res.send(check);
  } catch (error) {
    console.log(error.message);
    res.status(error.statusCode);
    res.send(error.responseBody);
  }
});

module.exports = router;
