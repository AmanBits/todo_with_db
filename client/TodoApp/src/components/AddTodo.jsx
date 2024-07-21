import { useRef } from 'react';
import style from '../assets/css/addtodo.module.css';
const AddTodo = ({addItem}) => {
 const useItemName = useRef();
 const useItemDate = useRef();


  const handleAddItem=(event)=>{
    event.preventDefault();
    addItem(useItemName.current.value,useItemDate.current.value);
    useItemName.current.value="";
    useItemDate.current.value="";
  }

  return (
    <div className={style.addtodocontainer}>
      <form onSubmit={handleAddItem}>
      <input className={style.textbox} type="text" ref={useItemName} required placeholder="Add your wishlist"  />
      <input className={style.datebox} type="date" ref={useItemDate} required   />
      <button className={style.addbtn} >Add + </button>
      </form>
    </div>
  );
};

export default AddTodo;
