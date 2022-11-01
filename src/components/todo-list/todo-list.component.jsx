
import { useSelector } from 'react-redux';
import { selectTodoList } from "../../store/todo/todo.selector";
import TodoForm from "../todo-form/todo-form.component";

const TodoList = () => {

    const todoList = useSelector(selectTodoList)
    

    return(
        
            <div>
                {todoList.map((todoItem) => 
                <TodoForm key={todoItem.id} title={todoItem.title} description={todoItem.description}/>)}
            </div>


        
    )
}

export default TodoList; 