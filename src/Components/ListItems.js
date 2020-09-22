import React from 'react';
function ListItems(props){
    const items = props.items;
    const job = props.job;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key }>
     <tr>
       <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
         <input type="text" onChange={(e)=>{
             props.setUpdate(e.target.value,item.ke)}}/>
       <td> <button onClick={() => {
            props.deleteItem(item.key )
        }} >   Delete   </button>
        </td>
        </tr>
    </div>})  
    return <div>
       <td> {listItems}</td>
    </div>;
  }

  export default ListItems;