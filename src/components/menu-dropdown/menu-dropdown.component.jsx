import { Link } from "react-router-dom"
const MenuDropdown = () => {

    return(
        <>
            <div className="edit-link" to="/addtodo">
                <Link>Edit...</Link>
            </div>
            <div>
                <span >Delete</span> {/*onClick={}*/}
            </div>
        </>
    )
}

export default MenuDropdown;


