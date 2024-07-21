import style from "../assets/css/item.module.css";
const Item = ({ item,deleteItem }) => {
  return <li className={style.item}><span className={style.item_name}>{item.itemname}</span><span className={style.item_date}> {item.itemdate}</span><button className={style.delete_btn} onClick={()=>deleteItem(item.id)}>Delete</button></li>;
};

export default Item;
