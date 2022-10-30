import Button from "../../components/button/button.component";
import ColorTag from "../../components/color-tag/color-tag.component";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToList } from "../../store/todo/todo.action";
import { selectTodoList } from "../../store/todo/todo.selector";
import { useNavigate } from "react-router-dom";

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

    const todoItem = {
        title: titleInput,
        description: descriptionInput,
    }

    const dispatch = useDispatch();
    const todoList = useSelector(selectTodoList);
    const navigate = useNavigate();

    const buttonHandler = () => {
        dispatch(addItemToList(todoList, todoItem));
        
        navigate('/navigation');
    }
 
   

    return(
        <>
            <div>
                <Button name='Cancel'/>
                <Button name='Add' onClick={buttonHandler}/>
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
            
        </>
    )
}

export default AddTodo;