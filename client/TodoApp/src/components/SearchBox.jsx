const SearchBox = ({ onChangeHandle }) => {
  return (
    <div>
      <input
        type="text"
        onChange={onChangeHandle}
        required
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBox;
