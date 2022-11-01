import { ReactComponent as EllipsisIcon } from "../../assets/ellipsis.svg";
// import { useSelector, useDispatch } from "react-redux";
// import { selectIsMenuOpen } from "../../store/menu/menu.selector";
// import { setIsMenuOpen } from "../../store/menu/menu.action";
import { useState } from "react";
import MenuDropdown from "../menu-dropdown/menu-dropdown.component";

const MenuIcon = () => {
  // const isMenuOpen = useSelector(selectIsMenuOpen);
  // const dispatch = useDispatch();
  // const toggleIsMenuOpen = () => {
  //   dispatch(setIsMenuOpen(!isMenuOpen));
  // };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleIsMenuOpen = () => setIsMenuOpen(!isMenuOpen);


  return (
    <>
      <div >
        <EllipsisIcon onClick={toggleIsMenuOpen} />
      </div>
      {isMenuOpen  && <MenuDropdown/>}
    </>
  );
};

export default MenuIcon;
