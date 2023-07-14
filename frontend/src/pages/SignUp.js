import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./SignUp.css";

function SignUp() {
  const initialValues = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    city: "",
    phone: "",
    role: ["ROLE_USER"],
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    address: Yup.string().required("Address is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    city: Yup.string().required("City is required"),
    phone: Yup.string().required("Phone is required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    if (Formik.isSubmitting) {
      return; // Prevent form submission if it's already submitting
    }
    console.log(values);
    setSubmitting(false); // When done, set this to false
    fetch("http://localhost:5555/api/auth/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => response.json()) // parsing the response to JSON
      .then((data) => {
        console.log("Response from server: ", data);
      })
      .catch((err) => {
        console.log("Error occurred during fetch: ", err);
      });
  };

  return (
    <div className="container">
      <h1>Inscription</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <div className="form-line">
              <div className="input-container">
                <label htmlFor="username">Nom d'utilisateur:</label>
                <Field type="text" id="username" name="username" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="input-container">
                <label htmlFor="password">Mot de passe:</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="form-line">
              <div className="input-container">
                <label htmlFor="firstName">Nom:</label>
                <Field type="text" id="firstName" name="firstName" />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="input-container">
                <label htmlFor="lastName">Prénom:</label>
                <Field type="text" id="lastName" name="lastName" />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="form-line">
              <div className="input-container long-input">
                <label htmlFor="email">Email:</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="form-line">
              <div className="input-container long-input">
                <label htmlFor="address">Adresse:</label>
                <Field type="text" id="address" name="address" />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="form-line">
              <div className="input-container">
                <label htmlFor="city">City:</label>
                <Field type="text" id="city" name="city" />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="input-container">
                <label htmlFor="phone">Phone:</label>
                <Field type="text" id="phone" name="phone" />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="form-line button-container">
              <button type="submit">Register</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
