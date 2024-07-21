import style from "../assets/css/itembox.module.css";
import Item from "./Item";
const ListItems = ({ items,deleteItem }) => {
    console.log(items);
  return (
    <>
    {items.map((item) => (
        <div className={style.itembox} key={item.id}>
            <Item item={item} deleteItem={deleteItem} />
        </div>
    ))}
    </>
  );
};

export default ListItems;
