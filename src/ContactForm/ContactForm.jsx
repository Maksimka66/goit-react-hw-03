import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const ContactForm = ({ addUser }) => {
  const initialValues = {
    username: "",
    userphone: "",
  };

  const nameId = useId();
  const numberId = useId();

  const userForm = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
    userphone: Yup.number()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={addUser}
      validationSchema={userForm}
    >
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="username" />

        <label htmlFor={numberId}>Number</label>
        <Field type="number" name="userphone" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
