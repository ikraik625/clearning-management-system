import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import './Login.css';

function Login() {
  const initialValues = {
    username: '',
    password: '',
  };

  const [redirectTo, setRedirectTo] = useState(null);

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);

    fetch('http://localhost:5555/api/auth/authenticate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        const { token } = data;

        // Store the token in session storage
        sessionStorage.setItem('token', token);

        // Store the token in local storage
        localStorage.setItem('token', token);
        if(data!=null) {
          setRedirectTo('/MesReservations');
        }

      })
      .catch((error) => {
        console.log('Error occurred during authentication:', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

    if (redirectTo) {
      window.location.href = redirectTo;
    }

  return (
    <div className="login-container">
      <h1>Connexion</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <div className="form-line">
            <div className="input-container">
              <label htmlFor="username">Nom d'utilisateur:</label>
              <Field type="text" id="username" name="username" />
            </div>
          </div>
          <div className="form-line">
            <div className="input-container">
              <label htmlFor="password">Mot de passe:</label>
              <Field type="password" id="password" name="password" />
            </div>
          </div>
          <div className="form-line button-container">
            <button type="submit">Se connecter</button>
          </div>
        </Form>
      </Formik>
      <p>
        <Link to="/forgot-password">Mot de passe oublié ?</Link>
      </p>
      <p>
        Vous n’avez pas de compte ?{' '}
        <Link className="inscription-link" to="/signup">
          Inscrivez-vous ici
        </Link>
      </p>
    </div>
  );
}

export default Login;
