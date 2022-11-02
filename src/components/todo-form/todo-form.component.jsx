import MenuIcon from "../menu-icon/menu-icon.component";
import {TodoFormContainer} from './todo-form.style';
// import MenuDropdown from '../menu-dropdown/menu-dropdown.component';
// import { useSelector } from "react-redux";
// import { selectIsMenuOpen } from "../../store/menu/menu.selector";

const TodoForm = ({todoItem}) => {
    const {title, description} = todoItem
    // const {title, description} = props;
    // const isMenuOpen = useSelector(selectIsMenuOpen);
    // console.log(isMenuOpen);

    return(
        <TodoFormContainer>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <MenuIcon todoItem={todoItem}/> 
            </div>   
            
            <h2>{description}</h2>


        </TodoFormContainer>
    )
}
export default TodoForm;