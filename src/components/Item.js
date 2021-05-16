import React, { useState } from "react";

function Item({ name, category , cartStatus=false, setItems,items=[]}) {
  
  const [inCart,setCart] = useState(cartStatus)
  function addToCart() {
    setCart(true)
    if (setItems){
      setItems(items.map((item) => {
        
        if(item.name===name){
          item.cartStatus = true;
          return item
        }else {
          
          return item;
        }
      }))
    }
  }
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">Add to Cart</button>
    </li>
  );
}


export default Item;
