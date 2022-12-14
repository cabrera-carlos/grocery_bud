import { useState } from "react";
import GroceryList from "./GroceryList";

function App() {
  const [groceryList, setGroceryList] = useState([]);
  const [item, setItem] = useState("");
  const [itemIndex, setItemIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = [...groceryList];
    let newIndex = itemIndex;

    if (newIndex === newList.length) {
      console.log("add at the end");
      newList = [...newList, item];
    } else {
      console.log("add at specific location");
      newList = newList.map((elem, index) => {
        if (index === newIndex) {
          return item;
        }

        return elem;
      });
    }

    setGroceryList(newList);
    setItem("");
    setItemIndex(newList.length);
  };

  const updateItem = (index) => {
    setItem(groceryList[index]);
    setItemIndex(index);
  };

  const deleteItem = (index) => {
    const newList = groceryList.filter((v, i) => i !== index);
    setGroceryList(newList);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            name="item"
            className="grocery"
            placeholder="e.g. bacon"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {itemIndex === groceryList.length ? "submit" : "edit"}
          </button>
        </div>
      </form>
      {groceryList.length > 0 && (
        <div className="grocery-container">
          <GroceryList
            list={groceryList}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
          <button className="clear-btn">clear items</button>
        </div>
      )}
    </section>
  );
}

export default App;
