import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUserName } from "../../redux/auth/selectors";

import css from "./Layout.module.css";
import { logout } from "../../redux/auth/operations";

const Layout = ({ children }) => {
  const isLogin = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const logOutHandle = (token) => {
    dispatch(logout(token));
  };
  const userName = useSelector(selectUserName);

  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          {isLogin ? (
            <>
              <NavLink to="/">Homepage</NavLink>
              <NavLink to="/contacts">ContactsPage</NavLink>
              <div className={css.logout}>
                <span className={css.span}>Hello {userName}</span>
                <button type="button" onClick={logOutHandle}>
                  logged out
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink to="/register">RegistrationPage</NavLink>
              <NavLink to="/login">LoginPage</NavLink>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
