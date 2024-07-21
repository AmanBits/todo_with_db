import React, { useEffect, useState } from "react";
import TodoContainer from "./components/TodoContainer";
import AppTitle from "./components/AppTitle";
import AddTodo from "./components/AddTodo";
import ListContainer from "./components/ListContainer";
import ListItems from "./components/ListItems";
import { fetchList, addItemPost, deleteOneItem } from "./services/item_api";

const App = () => {
  const [items, setItems] = useState([]);
  const getData = async () => {
    try {
      const data = await fetchList();
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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

  return (
    <TodoContainer>
      <AppTitle />
      <AddTodo addItem={addItem} />
      <ListContainer>
        <ListItems items={items} deleteItem={deleteItem}></ListItems>
      </ListContainer>
    </TodoContainer>
  );
};

export default App;
