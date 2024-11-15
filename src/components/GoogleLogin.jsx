import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from './db.js';
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
function GoogleLogin({ send }) {

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                send(user.uid);
            })
            .catch((error) => {
                console.error("Error al iniciar sesión con Google:", error);
                alert("No se ha podido iniciar sesión. Inténtalo de nuevo.");
            });
    };

    return (
        <button onClick={handleGoogleLogin} className="google-login-button">
            <img src='../../public/img/googleicon.png'/>
        </button>
    );
}

export default GoogleLogin;