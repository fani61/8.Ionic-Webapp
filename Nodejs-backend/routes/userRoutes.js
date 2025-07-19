const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { signup } = require('../validators/userValidators');


router.route('/signup').post( signup(), UserController.signupUser );
router.route('/login').post( UserController.loginUser );
router.route('/fetch').get( UserController.fetchFruits );

router.post('/contacts', (req,res)=> {
    console.log(`The body is: ${req.body}`)
    res.json({ message: 'You have reached somewhere'})
});

router.get('/contacts1', (req,res)=> {
    res.send({ message: 'You have reached somewhere'})
});



module.exports = router;