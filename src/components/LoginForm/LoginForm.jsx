import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

import css from "./LoginForm.module.css";

const initialValues = {
  email: "",
  password: "",
};

const LoginFormSchema = Yup.object().shape({
  email: Yup.string().min(3, "Too short! This field must be at least three characters long!").max(50, "Too Long!").required("Required"),
  password: Yup.string().min(3, "Too short! This field must be at least three characters long!").max(50, "Too Long!").required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const onSubmitHandle = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitHandle} validationSchema={LoginFormSchema}>
      <Form className={css.form}>
        <label htmlFor="email">
          Email
          <Field type="email" name="email" placeholder="Enter your email" />
          <ErrorMessage component="span" name="email" />
        </label>
        <label htmlFor="password">
          Password
          <Field type="password" name="password" placeholder="Enter your password" />
          <ErrorMessage component="span" name="password" />
        </label>
        <button type="submit" className={css.button}>
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
