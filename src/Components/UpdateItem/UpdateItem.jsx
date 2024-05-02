import "./updateItem.css";
import { useState } from "react";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";

const UpdateItem = (props) => {
  const { edit, id, updateNewTodo } = props;

  const [editInput, setEditInput] = useState(edit);

  const updateInputHandle = (e) => {
    setEditInput(e.target.value);
  };

  return (
    <div className="todo-update-form">
      <input
        className="update-input"
        type="text"
        value={editInput}
        onChange={updateInputHandle}
        id="update-in"
      />

      <button
        className="btn-update"
        onClick={() => updateNewTodo({ title: editInput, id: id })}
      >
        <MdOutlineSystemUpdateAlt className="getTodo-icon-update" size={20} />
      </button>
    </div>
  );
};

export default UpdateItem;
