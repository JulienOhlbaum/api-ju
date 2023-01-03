const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const stuffCtrl = require('../controllers/stuff');

router.get('/', stuffCtrl.getAllStuff);
router.get('/user_products/:userId', auth, stuffCtrl.getAllProductsFromUser);
router.post('/', auth, multer, stuffCtrl.createThing);
router.get('/:id', stuffCtrl.getOneThing);
router.put('/:id', stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);
 
module.exports = router;