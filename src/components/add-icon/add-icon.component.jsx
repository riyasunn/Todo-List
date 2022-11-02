// import { IconContainer } from './add-icon.style'
import { ReactComponent as PlusIcon } from'../../assets/plus-icon.svg';
import AddTodo from '../add-todo/add-todo.component';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAddTodoOpen } from '../../store/todo/todo.action';
import { selectIsAddTodoOpen } from '../../store/todo/todo.selector';

const AddIcon = () => {
    
    const dispatch = useDispatch();
    const isAddTodoOpen = useSelector(selectIsAddTodoOpen);

    const ToggleIsAddTodoOpen = () => dispatch(setIsAddTodoOpen(!isAddTodoOpen));

    return(
            <div >
                <PlusIcon  onClick={ToggleIsAddTodoOpen}/>
                <div >
                    {isAddTodoOpen && <AddTodo />}
                </div>
            </div>
    )
}

export default AddIcon;