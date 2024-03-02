import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";

import { nanoid } from "nanoid";
import * as Yup from "yup";

import styles from "./ContactForm.module.css";

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
    userphone: Yup.string()
      .min(3, "Too short!")
      .max(5, "Too long!")
      .required("Required!"),
  });

  const submitForm = (values, actions) => {
    addUser({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={userForm}
    >
      <Form className={styles.submitForm}>
        <div className={styles.formContainer}>
          <label className={styles.fieldDescription} htmlFor={nameId}>
            Name
          </label>
          <Field className={styles.formItem} type="text" name="username" />
          <ErrorMessage name="username" as="span" />
        </div>

        <div className={styles.formContainer}>
          <label className={styles.fieldDescription} htmlFor={numberId}>
            Number
          </label>
          <Field className={styles.formItem} type="number" name="userphone" />
          <ErrorMessage name="userphone" as="span" />
        </div>

        <button className={styles.submitBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
