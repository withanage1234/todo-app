import { useState } from "react";
import Input from "../Input/Input";
import "./todo.css";
import GetTodo from "../GetTodo/GetTodo";
import UpdateItem from "../UpdateItem/UpdateItem";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(null);
  const [updateInput, setUpdateInput] = useState(false);

  const inputHandle = (e) => {
    setInputValue(e.target.value);
  };

  const getValueHandle = () => {
    setItems((preItem) =>
      preItem ? [...preItem, { id: uuidv4(), title: inputValue }] : null
    );
    setInputValue("");
  };
  const deleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const editHandle = (id) => {
    const findTodo = items.find((edit) => edit.id === id);
    setEdit(findTodo);
    setUpdateInput(true);
  };

  const updateNewTodo = ({ title, id }) => {
    const newUpdate = items.map((updateItem) =>
      updateItem.id === id ? { title, id } : updateItem
    );

    setUpdateInput(false);
    setItems(newUpdate);
  };

  return (
    <div className="todo-container">
      <div className="todo-block">
        <div className="todo-heading">TODO APP</div>
        <div className="todo-input-form">
          {updateInput === false ? (
            <Input
              inputHandle={inputHandle}
              getValue={getValueHandle}
              value={inputValue}
              edit={edit}
              setEdit={setEdit}
            />
          ) : null}
        </div>

        {updateInput === true && edit ? (
          <UpdateItem
            key={edit.id}
            id={edit.id}
            edit={edit.title}
            updateNewTodo={updateNewTodo}
          />
        ) : (
          items?.map((item) =>
            item.title ? (
              <GetTodo
                item={item.title}
                key={item.id}
                id={item.id}
                onChecked={deleteItem}
                editHan={editHandle}
                items={items}
              />
            ) : null
          )
        )}
      </div>
    </div>
  );
};

export default Todo;
