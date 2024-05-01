import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

const Navigation = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <nav className={css.nav}>{isLogin ? <UserMenu /> : <AuthNav />}</nav>
    </header>
  );
};

export default Navigation;
