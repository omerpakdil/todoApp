import React from 'react';

function CompletedToDo({completedItemList,itemList,setItemList,setCompletedItemList}) {


    const onChange = (e) => {
        setItemList([...itemList,{[e.target.name]:e.target.value}]);
        completedItemList.forEach((element,i) => {
            if(element.item === e.target.value){
                completedItemList.splice(i,1);
            }
        });
    }



    return (
        <div>
            <hr />
            <ul className="list">
                <h2>Completed Tasks</h2>
                {
                completedItemList.map((item,i) => 
                <li key={i}>{item.item}
                <input type="checkbox" name='item' value={item.item} defaultChecked={true} onChange={onChange}/>
                </li>
                )
                }
            </ul>
        </div>
    )
}

export default CompletedToDo;
