import { Link } from "react-router-dom"
import { MenuDropdownContainer } from './menu-dropdown.style';

const MenuDropdown = () => {

    return(
        <MenuDropdownContainer>
            <div className="edit-link" >
                <Link>Edit...</Link>
            </div>
            <div>
                <span >Delete</span> {/*onClick={}*/}
            </div>
        </MenuDropdownContainer>
    )
}

export default MenuDropdown;


