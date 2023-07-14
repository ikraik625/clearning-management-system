import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Infos.css";

const Infos = () => {
  const [existingUserData, setExistingUserData] = useState({
    password: "",
    address: "",
    email: "",
    city: "",
    phone: "",
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async (userId) => {
    // Fetch the existing user's data from the server
    // This is a placeholder and will need to be replaced with your actual function
    return {
      password: "password",
      address: "123 Main St",
      email: "existinguser@example.com",
      city: "City",
      phone: "123-456-7890",
    };
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("Password is required"),
    address: Yup.string().required("Address is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    city: Yup.string().required("City is required"),
    phone: Yup.string().required("Phone is required"),
  });

  const onSubmitModify = (values, { setSubmitting }) => {
    if (Formik.setSubmitting) {
      return;
    }
    fetch("http://localhost:5555/api/auth/update", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server: ", data);
        setSubmitting(false);
      })
      .catch((err) => {
        console.log("Error occurred during fetch: ", err);
        setSubmitting(false);
      });
  };

  return (
    <div className="update-form-container">
      <h2 className="title">Modifier les informations:</h2>
      <div className="form-container">
        <Formik
          initialValues={existingUserData}
          validationSchema={validationSchema}
          onSubmit={onSubmitModify}
        >
          {() => (
            <Form>
              <div className="form-line">
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
                  <label htmlFor="city">Ville:</label>
                  <Field type="text" id="city" name="city" />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="phone">Téléphone:</label>
                  <Field type="text" id="phone" name="phone" />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>
              <div className="form-line button-update">
                <button type="submit">Modifier</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Infos;
