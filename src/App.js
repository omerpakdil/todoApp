import './App.css';
import CompletedToDo from './components/completedTodo';
import ToDoList from './components/todo';
import { useState } from 'react';
function App() {

  const [itemList,setItemList] = useState([]);
  const [completedItemList,setCompletedItemList] = useState([]);

  console.log(itemList);
  console.log(completedItemList);

  return (
    <div id="container">
      <h1 className="header1">todo</h1>
      <ToDoList 
      itemList={itemList} 
      setItemList={setItemList}
      completedItemList={completedItemList} 
      setCompletedItemList={setCompletedItemList}
      />
      <CompletedToDo
      itemList={itemList} 
      setItemList={setItemList}
      completedItemList={completedItemList}
      setCompletedItemList={setCompletedItemList}
      />
    </div>
  );
}

export default App;
