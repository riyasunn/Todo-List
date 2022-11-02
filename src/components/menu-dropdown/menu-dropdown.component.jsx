import { Link } from "react-router-dom"
import { MenuDropdownContainer } from './menu-dropdown.style';
import { useSelector, useDispatch } from "react-redux";
import { selectTodoList } from '../../store/todo/todo.selector';
import { delItemToList } from '../../store/todo/todo.action';

const MenuDropdown = ({todoItem}) => {
   const todoList = useSelector(selectTodoList);
   const dispatch = useDispatch();

   const delTodoHandler = () =>
    dispatch(delItemToList(todoList, todoItem));


    return(
        <MenuDropdownContainer>
            <div className="edit-link" >
                <Link>Edit...</Link>
            </div>
            <div onClick={delTodoHandler}>
                <span >Delete</span> 
            </div>
        </MenuDropdownContainer>
    )
}

export default MenuDropdown;


