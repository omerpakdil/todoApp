import './App.css';
import CompletedToDo from './components/completedTodo';
import ToDoList from './components/todo';
import { useState,useEffect } from 'react';
import axios from 'axios';


function App() {

  const [itemList,setItemList] = useState([]);
  const [completedItemList,setCompletedItemList] = useState([]);


  useEffect(() => {

    window.JF.login(

      function success(){
          window.JF.getForms(function(response){
              for(var i=0; i<response.length; i++){
                  document.write( "<li> " + response[i].title);
              }
          });
      },

      function error(){
          window.alert("Could not authorize user");
      }
    ); 

    

    

  },[]);

  useEffect(() => {

  },[itemList]);

  useEffect(() => {

  },[completedItemList]);



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
      <button onClick={() => axios.post("https://api.jotform.com/form?apiKey=7981f746e3240a3c10e0c1ea44963223",itemList)
          .then(res => console.log(res))}></button>
    </div>
  );
}

export default App;
