const itemController = require('../controllers/itemController');
const router = require('express').Router();



router.get('/itemList',itemController.itemList);
router.post('/addItem',itemController.addItem);
router.delete('/deleteItem/:id',itemController.deleteItem);


module.exports = router;





