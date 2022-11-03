import { MenuDropdownContainer } from './menu-dropdown.style';
import { useSelector, useDispatch } from "react-redux";
import { selectIsEditTodoOpen, selectTodoList } from '../../store/todo/todo.selector';
import { delItemToList, setIsEditTodoOpen } from '../../store/todo/todo.action';
import EditTodo from '../edit-todo/edit-todo.component';

const MenuDropdown = ({todoItem}) => {
   const todoList = useSelector(selectTodoList);
   const isEditTodoOpen = useSelector(selectIsEditTodoOpen);
   const dispatch = useDispatch();

   const delTodoHandler = () =>{
    dispatch(delItemToList(todoList, todoItem));
    };

    const editTodoHandler = () => {
        // console.log("editTodoHandler");
        dispatch(setIsEditTodoOpen(!isEditTodoOpen));
        // console.log(isEditTodoOpen);
    };

    console.log(isEditTodoOpen);

    return(
        <MenuDropdownContainer>
            <div  >
                <span onClick={editTodoHandler}>Edit...</span> 
                {
                    isEditTodoOpen && <EditTodo todoItem={todoItem} />
                }
            </div>
            <div onClick={delTodoHandler}>
                <span >Delete</span>
            </div>
        </MenuDropdownContainer>
    )
}

export default MenuDropdown;


