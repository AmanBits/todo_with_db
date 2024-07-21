import style from '../assets/css/todocontainer.module.css';

const TodoContainer = ({children }) => {
  return <center className={style.todocontainer}>{children}</center>;
};

export default TodoContainer;
