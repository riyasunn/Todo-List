
import { useSelector } from 'react-redux';
import { selectTodoList } from "../../store/todo/todo.selector";
import TodoForm from "../todo-form/todo-form.component";
import {TodoListContainer} from "./todo-list.style";

const TodoList = () => {

    const todoList = useSelector(selectTodoList)
    

    return(
        
            <TodoListContainer>
                {todoList.map((todoItem) => 
                <TodoForm key={todoItem.id} todoItem={todoItem}/>)}
            </TodoListContainer>


        
    )
}

export default TodoList; 