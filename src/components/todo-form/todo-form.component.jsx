import MenuIcon from "../menu-icon/menu-icon.component";

const TodoForm = (props) => {
    const {title, description} = props;
    return(
        <>
        <div>
            <h1>{title}</h1>
        </div>

        <MenuIcon />    
        
        <h2>{description}</h2>


        </>
    )
}
export default TodoForm;