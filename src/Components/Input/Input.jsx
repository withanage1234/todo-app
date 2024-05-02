import "./input.css";
import { MdAdd } from "react-icons/md";

const Input = (props) => {
  const { inputHandle, getValue, value, id } = props;

  return (
    <>
      <input
        className="todo-input"
        type="text"
        onChange={inputHandle}
        value={value}
        placeholder="Edd text..."
        id="text-input"
        required
      />
      <button className="btn-add" type="submit" onClick={() => getValue(id)}>
        <MdAdd className="add-icon" size={25} />
      </button>
    </>
  );
};

export default Input;
