
const Button = (props) => {
    const {name, onClick} = props;
    return(
        <div>
            <button onClick={onClick}>{name}</button>
        </div>
    )
}

export default Button;

