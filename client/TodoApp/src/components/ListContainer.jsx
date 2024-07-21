import style from '../assets/css/listcontainer.module.css';
const ListContainer = ({children})=>{
    return(
        <div className={style.listcontainer}>
           {children}
        </div>
    )
}


export default ListContainer;