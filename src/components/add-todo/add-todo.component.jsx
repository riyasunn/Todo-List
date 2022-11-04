import { AddTodoContainer } from "./add-todo.style";
import Button from "../../components/button/button.component";
import ColorTag from "../../components/color-tag/color-tag.component";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToList,
  editTodoList,
  setIsEditTodoOpen,
} from "../../store/todo/todo.action";
import { setIsAddTodoOpen } from "../../store/todo/todo.action";
import {
  selectIsEditTodoOpen,
  selectTodoList,
} from "../../store/todo/todo.selector";
import { selectIsAddTodoOpen } from "../../store/todo/todo.selector";

const AddTodo = ({ todoItem }) => {
  const dispatch = useDispatch();
  const isAddTodoOpen = useSelector(selectIsAddTodoOpen);
  const isEditTodoOpen = useSelector(selectIsEditTodoOpen);
  const todoList = useSelector(selectTodoList);

  let titleInit = "";
  let descriptionInit = "";
  let buttonName = "Add";
  let CancelHandler = () => dispatch(setIsAddTodoOpen(!isAddTodoOpen));
  console.log("todoItem is undefined");
  console.log("buttonName is " + buttonName);

  if (todoItem !== undefined) {
    console.log("todoItem is defined");
    var { title, description, id } = todoItem;
    titleInit = title;
    descriptionInit = description;
    buttonName = "Save";
    CancelHandler = () => dispatch(setIsEditTodoOpen(!isEditTodoOpen));
  }
  console.log("buttonName is " + buttonName);

  const [titleInput, setTitleInput] = useState(titleInit);
  const onTitleChangeHandler = (e) => {
    e.preventDefault();
    setTitleInput(e.target.value);
  };

  const [descriptionInput, setDescriptionInput] = useState(descriptionInit);
  const onDescriptionChangeHandler = (e) => {
    e.preventDefault();
    setDescriptionInput(e.target.value);
  };

  const createToDoItem = (titleInput, descriptionInput) => {
    const id = Math.floor(Math.random() * 10000);
    const todoItem = {
      id: id,
      title: titleInput,
      description: descriptionInput,
    };
    return todoItem;
  };

  const editToDoItem = (titleInput, descriptionInput) => {
    const todoItem = {
      id: id,
      title: titleInput,
      description: descriptionInput,
    };
    return todoItem;
  };

  const ButtonHandler = () => {
    if (buttonName === "Add") {
      console.log("buttonHandler is add");
      dispatch(
        addItemToList(todoList, createToDoItem(titleInput, descriptionInput))
      );
      CancelHandler();
    } else {
      console.log("buttonHandler is save");
      dispatch(
        editTodoList(todoList, editToDoItem(titleInput, descriptionInput))
      );
      CancelHandler();
    }
  };

  return (
    <AddTodoContainer>
      <div>
        <Button name="Cancel" onClick={CancelHandler} />
      </div>

      <div>
        <Button name={buttonName} onClick={ButtonHandler} />
      </div>

      <div>
        <form>
          <h2>Title</h2>

          <input
            type="text"
            placeholder="add a title..."
            value={titleInput}
            className="title-input"
            onChange={onTitleChangeHandler}
          />

          <h2>Description</h2>

          <input
            type="text"
            placeholder="add a description..."
            value={descriptionInput}
            className="description-input"
            onChange={onDescriptionChangeHandler}
          />
        </form>
      </div>

      <div>
        <h2> Tags</h2>
        <ColorTag />
      </div>
    </AddTodoContainer>
  );
};

export default AddTodo;
