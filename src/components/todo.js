import React from 'react';
import { useState } from 'react';

const initialValues = {item:''};

function ToDoList({itemList,setItemList}) {

    const[item,setItem] = useState(initialValues);

    const onChange = (e) => {
        setItem({...item,[e.target.name]:e.target.value});
    }

    const onClick = () => {
        setItemList([...itemList,item]);
    }
    

    return (
        <div>
            <input name='item' value={item.item} onChange={onChange}/>
            <button onClick={onClick}>Add</button>
            <hr/>
            <ul>
                {
                itemList.map((item,i) => <div key={i}>{item.item}</div>)
                }
            </ul>
        </div>
    );
}

export default ToDoList;