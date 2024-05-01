import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/auth/operations";
import { selectUserName } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import clsx from "clsx";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.NavLink, {
    [css.active]: isActive,
  });
const UserMenu = () => {
  const dispatch = useDispatch();
  const logOutHandle = (token) => {
    dispatch(logout(token));
  };
  const userName = useSelector(selectUserName);
  return (
    <>
      <NavLink className={getNavLinkClassName} to="/">
        Homepage
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/contacts">
        ContactsPage
      </NavLink>
      <div className={css.logout}>
        <span className={css.span}>Hello, {userName}</span>
        <button type="button" onClick={logOutHandle}>
          Logged out
        </button>
      </div>
    </>
  );
};

export default UserMenu;
