import { EditTodoContainer } from './edit-todo.style'
import Button from "../../components/button/button.component";
import ColorTag from "../../components/color-tag/color-tag.component";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodoList } from "../../store/todo/todo.action";
import { setIsEditTodoOpen } from '../../store/todo/todo.action';
import { selectTodoList } from "../../store/todo/todo.selector";
import { selectIsEditTodoOpen } from "../../store/todo/todo.selector.js"
// import { selectIsAddTodoOpen } from '../../store/todo/todo.selector';

const EditTodo = ({todoItem}) => {
    const { title, description, id} = todoItem;

    const [titleInput, setTitleInput] = useState(title);
    const onTitleChangeHandler = (e) => {
        setTitleInput(e.target.value);
    }

    const [descriptionInput, setDescriptionInput] = useState(description);
    const onDescriptionChangeHandler = (e) => {
        setDescriptionInput(e.target.value);
    }

    const createToDoItem = (titleInput, descriptionInput) => {
        // const id = Math.floor(Math.random()*10000)
        
        const todoItem = {
            id: id,
            title: titleInput,
            description: descriptionInput,
        };
        return todoItem;
    };

    

    const dispatch = useDispatch();
    const isEditTodoOpen = useSelector(selectIsEditTodoOpen);
    const todoList = useSelector(selectTodoList);

    const ToggleIsEditTodoOpen = () => dispatch(setIsEditTodoOpen(!isEditTodoOpen));
    
    const saveButtonHandler = () => {
        dispatch(editTodoList(todoList, createToDoItem(titleInput, descriptionInput)));
        ToggleIsEditTodoOpen();
    }
 
   

    return(
        <EditTodoContainer>
            <div>
                <Button name='Cancel' onClick={ToggleIsEditTodoOpen}/>
            </div>
            <div>
                <Button name='Save' onClick={saveButtonHandler}/>
            </div>
            
            <div>
                <form>
                    <h2>Title</h2>
                    <input 
                    type='text'
                    placeholder='add a title...'
                    value={ titleInput }
                    className='title-input'
                    onChange={onTitleChangeHandler}/>
                    <h2>Description</h2>
                    <input
                    type='text'
                    placeholder='add a description...'
                    value={ descriptionInput }
                    className='description-input'
                    onChange={onDescriptionChangeHandler}/>
                </form>
            </div>

            <div>
                <h2> Tags</h2>
                <ColorTag />       
            </div>
            
        </EditTodoContainer>
    )
}

export default EditTodo;