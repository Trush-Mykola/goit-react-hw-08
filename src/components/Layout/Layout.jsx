import AppBar from "../AppBar/AppBar";

import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
