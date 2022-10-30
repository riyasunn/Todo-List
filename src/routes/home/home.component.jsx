import ColorTag from "../../components/color-tag/color-tag.component";
import TodoList from "../../components/todo-list/todo-list.component";
const Home = () => {
   
    return(
        <>
            <div>
                <ColorTag/>
            </div>

            <div>
                <label>
                    <input 
                    type="checkbox"
                    />
                    Hide Done Tasks
                </label>
            </div>

            
            <div>
                <TodoList />
            </div>

        </>
    )
}

export default Home;