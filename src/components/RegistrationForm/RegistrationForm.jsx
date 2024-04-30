import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

import css from "./RegistrationForm.module.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const registrationFormSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short! This field must be at least three characters long!").max(30, "Too Long!").required("Required"),
  email: Yup.string().min(3, "Too short! This field must be at least three characters long!").max(50, "Too Long!").required("Required"),
  password: Yup.string().min(7, "Too short! This field must be at least seven characters long!").max(30, "Too Long!").required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const onSubmitHandle = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitHandle} validationSchema={registrationFormSchema}>
      <Form className={css.form}>
        <label htmlFor="name">
          Name
          <Field type="text" name="name" placeholder="Enter your name" />
          <ErrorMessage component="span" name="name" />
        </label>
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
          Registration
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
