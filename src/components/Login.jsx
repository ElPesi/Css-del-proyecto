import { useState } from 'react';
import './SingUpAndLogin.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './db';
import GoogleLogin from './GoogleLogin';

const auth = getAuth(app);

function Login(props) {
  const [account, setAccount] = useState({
    Gmail: '',
    Password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, account.Gmail, account.Password)
      .then((userCredential) => {
        props.send(userCredential.user.uid);
        console.log(userCredential);
      })
      .catch(() => {
        setError('No se ha podido acceder a tu cuenta. Verifica la contraseña y el correo.');
      });
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccount({
      ...account,
      [name]: value
    });
  };

  return (
    <>
      <div className="popup">
        <div>
          <form onSubmit={handleSubmit}>
            <h5 className="error">{error}</h5>
            <h3>Correo:</h3>
            <input
              className="SignupInputs"
              onChange={handleChange}
              name="Gmail"
              type="email"
              placeholder="Ingresa tu correo"
            />
            <h3>Contraseña:</h3>
            <input
              className="SignupInputs"
              onChange={handleChange}
              name="Password"
              type="password"
              placeholder="Ingresa tu contraseña"
            />
            <br />
            <div style={{ display: "flex" }}>
              <button className="SignupButton" type="submit">
                <b>→</b> Iniciar Sesión
              </button>
              <GoogleLogin send={props.send} />
              <br />
            </div>
          </form>

        </div>
      </div>
    </>
  );
}

export default Login;
