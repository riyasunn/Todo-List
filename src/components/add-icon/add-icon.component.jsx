import { IconContainer } from './add-icon.style'
import { ReactComponent as PlusIcon } from'../../assets/plus-icon.svg';
import AddTodo from '../add-todo/add-todo.component';
import { useState } from 'react';

const AddIcon = () => {
    const [isAddIconOpen, setIsAddIconOpen] = useState(false);
    const toggleIsAddIconOpen = () => setIsAddIconOpen(!isAddIconOpen);

    return(
            <div >
                <PlusIcon  onClick={toggleIsAddIconOpen}/>
                <div >
                    {isAddIconOpen && <AddTodo />}
                </div>
            </div>
    )
}

export default AddIcon;