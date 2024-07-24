import style from "../assets/css/pagination.module.css";
const Pagination = ({ currentPage, totalPages,onClickBtn }) => {
  return (
    <div>
      <button
        onClick={() => onClickBtn(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onClickBtn(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
