import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items,setItems }) {
  const [selectedCategory,setCategory] = useState("All");
 

  function selectCategory(event) {
    
    setCategory(event.target.value);
    
  }

  function filterItems(category) {
    if(category ==="All") {
      return items;
    }

    return items.filter((item) => item.category === category)
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={selectCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterItems(selectedCategory).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} cartStatus={item.cartStatus} setItems={setItems} items={items} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;