const express = require('express');
const router = express.Router();

// item model
const Item = require('../../models/Item');


//GET - to get all items
router.get('/items', (req, res) => {
    
    //find method with mongoose fetches items
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});


//POST - to create item
router.post('/items', (req, res) => {
    
    //create new item obj
    const newItem = new Item({
        name: req.body.name
    });
    
    //save the item
    newItem.save()
    .then(item => res.json(item));
});


//DELETE - to delete item
router.delete('/items/:id', (req, res) => {
        
    //find item by id and delete
    Item.findById(req.params.id)
    .then(item => 
        item.remove()
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }))
    )

});


module.exports = router;