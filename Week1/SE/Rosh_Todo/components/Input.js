import React, { useState } from "react";
import "./styles.css"
const Input = () => {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);
  const handleChange = (event) => {
    const newValue = event.target.value;
    setTodo(newValue);
  };
  const addItem = () => {
    setItems((previtems) => {
      return [...previtems, todo];
    });
    setTodo("");
  };

  const deleteItem=(id)=> {
    console.log(id)
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div>
        <div className="form">
          <input type="text" onChange={handleChange} value={todo} />
          <button onClick={addItem}>
            <span>➕</span>
          </button>
        </div>
      </div>
      <div>
        <ul>
          {items.map((list,index) => {
            return (<div onClick={()=> deleteItem(index)}>
            <li>{list}</li>
            </div>);
          })}
        </ul>
      </div>
    </>
  );
};

export default Input;
