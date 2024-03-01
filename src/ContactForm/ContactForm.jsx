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

  return (
    <Formik initialValues={initialValues} onSubmit={addUser}>
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
