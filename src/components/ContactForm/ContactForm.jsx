import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Must be at least 2 characters")
    .max(50, "Must be 50 characters or less")
    .required("Required")
    .test(
      "no-whitespace",
      "Name cannot be just spaces",
      (value) => value.trim().length > 0
    ),

  number: Yup.string()
    .matches(/^(\+?[\d\s\-()]){7,}$/, "Phone number is not valid")
    .test(
      "no-repeated-digits",
      "Phone number cannot be all the same digit",
      (value) => {
        if (value) {
          const repeatedDigits = /^(.)\1*$/.test(value);
          return !repeatedDigits;
        }
        return true;
      }
    )
    .required("Phone number is required"),
});

function ContactForm({ onAddContact }) {
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.formWrapper}>
        <label className={css.label}>
          Name
          <Field
            type="text"
            name="name"
            className={css.input}
            placeholder="Enter your name"
          />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>

        <label className={css.label}>
          Number
          <Field
            type="text"
            name="number"
            className={css.input}
            placeholder="Enter phone number"
          />
          <ErrorMessage name="number" component="div" className={css.error} />
        </label>

        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
