import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const getNavLinkClassName = ({ isActive }) =>
  clsx(css.NavLink, {
    [css.active]: isActive,
  });
const AuthNav = () => {
  return (
    <>
      <NavLink className={getNavLinkClassName} to="/register">
        RegistrationPage
      </NavLink>
      <NavLink className={getNavLinkClassName} to="/login">
        LoginPage
      </NavLink>
    </>
  );
};

export default AuthNav;
