const db = require("../models");

// Create model
const Item = db.items;

// Add Todo Item
const addItem = async (req, res) => {
    console.log("Hello");
    console.log(req.body);
    console.log("Hello");
  const newitem = { itemname: req.body.name, itemdate: req.body.date };
  const item = await Item.create(newitem);
  res.status(200).json(item);
};

const itemList = async (req,res)=>{
    const items = await Item.findAll();
    res.status(200).json(items);
}

const deleteItem = async(req,res)=>{
    const id=req.params.id;
    const deletedData = await Item.destroy({where:{id:id}});
    res.status(200).json(deletedData);
}


module.exports={
    addItem,
    itemList,
    deleteItem
}