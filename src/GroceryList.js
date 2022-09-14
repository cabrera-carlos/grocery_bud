import { FaEdit, FaTrash } from "react-icons/fa";

function GroceryList({ list, updateItem, deleteItem }) {
  return (
    <div className="grocery-list">
      {list.map((item, index) => {
        return (
          <article key={index} className="grocery-item">
            <p className="title">{item}</p>
            <div className="btn-container">
              <button className="edit-btn" onClick={() => updateItem(index)}>
                <FaEdit />
              </button>
              <button className="delete-btn" onClick={() => deleteItem(index)}>
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default GroceryList;
