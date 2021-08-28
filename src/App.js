import './App.css';
import CompletedToDo from './components/completedTodo';
import ToDoList from './components/todo';
import { useState } from 'react';
function App() {

  const [itemList,setItemList] = useState([]);

  return (
    <div>
      <ToDoList itemList={itemList} setItemList={setItemList}/>
      <CompletedToDo />
    </div>
  );
}

export default App;
