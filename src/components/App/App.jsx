import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// import { selectError, selectLoading } from "../../redux/contacts/slice";
import Layout from "../Layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import RegistrationPage from "../../pages/RegistrationPage";
import LoginPage from "../../pages/LoginPage";
import ContactsPage from "../../pages/ContactsPage";
import NotFoundPage from "../../pages/NotFoundPage";
import { refreshUser } from "../../redux/auth/operations";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);
  // const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <RegistrationPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
        {/* <div className={css.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && <h2>Loading...</h2>}
        {isError && <h2>Sorry, something get wrong, try reload the page</h2>}
        <ContactList />
      </div> */}
      </Routes>
    </Layout>
  );
};

export default App;
