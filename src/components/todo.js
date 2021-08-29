import React from 'react';
import { useState } from 'react';

const initialValues = {item:''};

function ToDoList({itemList,setItemList,completedItemList,setCompletedItemList}) {

    const[item,setItem] = useState(initialValues);

    const onChange = (e) => {
        setItem({...item,[e.target.name]:e.target.value});
    }

    const onClick = () => {
        setItemList([...itemList,item]);
        setItem(initialValues);
    }

    const onChangeCheckBox = (e) => {
        setCompletedItemList([...completedItemList,{[e.target.name]:e.target.value}]);
        itemList.forEach((element,i) => {
            if(element.item === e.target.value){
                itemList.splice(i,1);
            }
        });
    }

    const onEnter = (e) => {
        if(e.charCode === 13){
            setItemList([...itemList,item]);
            setItem(initialValues);
        }
    }


    return (
        <div>
            <input name='item' value={item.item} onChange={onChange} onKeyPress={onEnter}/>
            <div className="btn">
                <button onClick={onClick}>Add</button>
            </div>
            <hr/>
            <ul className="list">
                <h2>Tasks</h2>
                {
                itemList.map((item,i) => <li key={i}>
                    {item.item}
                    <input name='item' type="checkbox" value={item.item} onChange={onChangeCheckBox}></input>
                    </li>)
                }
            </ul>
        </div>
    );
}

export default ToDoList;