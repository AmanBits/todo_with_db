import React, { useEffect, useState } from "react";
import TodoContainer from "./components/TodoContainer";
import AppTitle from "./components/AppTitle";
import AddTodo from "./components/AddTodo";
import ListContainer from "./components/ListContainer";
import ListItems from "./components/ListItems";
import { fetchList, addItemPost, deleteOneItem } from "./services/item_api";
import Pagination from "./components/Pagination";

const App = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5;

  const getData = async (page, limit) => {
    try {
      const data = await fetchList(page, limit);
      setItems(data.data);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(currentPage, limit);
  }, [currentPage]);

  const addItem = async (name, date) => {
    const data = { name, date };
    try {
      const addedData = await addItemPost(data);

      getData();
    } catch (error) {
      console.log(error);
    }

    // setItems((previous) => {
    //   return [...previous, { name: name, date: date }];
    // });
  };

  const deleteItem = async (deleteItem) => {
    try {
      const deletedData = await deleteOneItem(deleteItem);
      getData();
    } catch (error) {
      console.log(error);
    }

    // let newitem = items.filter((item) => item.name !== deleteItem);
    // console.log(newitem);
    // setItems(newitem);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <TodoContainer>
      <AppTitle />
      <AddTodo addItem={addItem} />
      <ListContainer>
        <ListItems items={items} deleteItem={deleteItem}></ListItems>
      </ListContainer>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onClickBtn={handlePageChange}
      />
    </TodoContainer>
  );
};

export default App;
