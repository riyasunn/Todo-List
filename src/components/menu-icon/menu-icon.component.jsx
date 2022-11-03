import { ReactComponent as EllipsisIcon } from "../../assets/ellipsis.svg";
// import { useSelector, useDispatch } from "react-redux";
// import { selectIsMenuOpen } from "../../store/menu/menu.selector";
// import { setIsMenuOpen } from "../../store/menu/menu.action";
import { useState } from "react";
import MenuDropdown from "../menu-dropdown/menu-dropdown.component";

const MenuIcon = ({ todoItem }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleIsMenuOpen = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div>
        <EllipsisIcon onClick={toggleIsMenuOpen} />
      </div>
      {isMenuOpen && <MenuDropdown todoItem={todoItem} />}
    </>
  );
};

export default MenuIcon;
