import { ReactComponent as EllipsisIcon } from "../../assets/ellipsis.svg";
import { useSelector, useDispatch } from "react-redux";
import { selectIsMenuOpen } from "../../store/menu/menu.selector";
import { setIsMenuOpen } from "../../store/menu/menu.action";

const MenuIcon = () => {
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const dispatch = useDispatch();
  const toggleIsMenuOpen = () => {
    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  return (
    <div onClick={toggleIsMenuOpen}>
      <EllipsisIcon />
    </div>
  );
};

export default MenuIcon;
