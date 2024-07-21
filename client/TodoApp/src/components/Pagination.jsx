import style from '../assets/css/pagination.module.css';
const Pagination = ({page,onPageClick}) =>{
    return(
        <div>
            <button onClick={()=>onPageClick('Prev')}>Prev</button>
            <button onClick={()=>onPageClick('Next')}>Next</button>
        </div>
    )

}


export default Pagination;