import { AddTodoContainer } from './add-todo.style'
import Button from "../../components/button/button.component";
import ColorTag from "../../components/color-tag/color-tag.component";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToList } from "../../store/todo/todo.action";
import { setIsAddTodoOpen } from '../../store/todo/todo.action';
import { selectTodoList } from "../../store/todo/todo.selector";
import { selectIsAddTodoOpen } from '../../store/todo/todo.selector';

const AddTodo = () => {
    

    const [titleInput, setTitleInput] = useState("");
    const onTitleChangeHandler = (e) => {
        setTitleInput(e.target.value);
        console.log(titleInput);
    }

    const [descriptionInput, setDescriptionInput] = useState("");
    const onDescriptionChangeHandler = (e) => {
        setDescriptionInput(e.target.value);
    }

    const createToDoItem = (titleInput, descriptionInput) => {
        const id = Math.floor(Math.random()*10000)
        const todoItem = {
            id: id,
            title: titleInput,
            description: descriptionInput,
        };
        return todoItem;
    };

    

    const dispatch = useDispatch();
    const isAddTodoOpen = useSelector(selectIsAddTodoOpen);
    const todoList = useSelector(selectTodoList);

    const ToggleIsAddTodoOpen = () => dispatch(setIsAddTodoOpen(!isAddTodoOpen));
    
    const addButtonHandler = () => {
        dispatch(addItemToList(todoList, createToDoItem(titleInput, descriptionInput)));
        ToggleIsAddTodoOpen();
    }
 
   

    return(
        <AddTodoContainer>
            <div>
                <Button name='Cancel' onClick={ToggleIsAddTodoOpen}/>
            </div>
            <div>
                <Button name='Add' onClick={addButtonHandler}/>
            </div>
            
            <div>
                <form>
                    <h2>Title</h2>
                    <input 
                    type='text'
                    placeholder='add a title...'
                    value={titleInput}
                    className='title-input'
                    onChange={onTitleChangeHandler}/>
                    <h2>Description</h2>
                    <input
                    type='text'
                    placeholder='add a description...'
                    value={descriptionInput}
                    className='description-input'
                    onChange={onDescriptionChangeHandler}/>
                </form>
            </div>

            <div>
                <h2> Tags</h2>
                <ColorTag />       
            </div>
            
        </AddTodoContainer>
    )
}

export default AddTodo;