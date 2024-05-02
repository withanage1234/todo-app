import "./getTodo.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const GetTodo = (props) => {
  const { item, onChecked, id, editHan } = props;

  const itemNew = item.charAt(0).toUpperCase() + item.slice(1);

  return (
    <div className="getTodo">
      <div className="getTodo-form ">
        <p className="getTodo-item">{itemNew}</p>

        <p className="getTodo-icons">
          <FiEdit
            className="getTodo-icon-update"
            size={26}
            onClick={() => editHan(id)}
          />

          <RiDeleteBin5Line
            className="getTodo-icon-delete"
            size={26}
            onClick={() =>
              window.confirm("Are you sure that this needs to be Deleted?")
                ? onChecked(id)
                : null
            }
          />
        </p>
      </div>
    </div>
  );
};

export default GetTodo;
