import { useState } from "react";

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
    <>
      <div>
        <h1>grocery bud</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      </div>
      <div>
        {groceryList.map((item, index) => {
          return (
            <div key={index}>
              <p>{item}</p>
              <button onClick={() => updateItem(index)}>edit</button>
              <button onClick={() => deleteItem(index)}>delete</button>
            </div>
          );
        })}
        <div>{groceryList.length > 0 && <button>clear items</button>}</div>
      </div>
    </>
  );
}

export default App;
