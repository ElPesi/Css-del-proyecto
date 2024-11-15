import './Navbar.css';
import './SingUpAndLogin.css'
import Login from "./Login";
import { useState } from 'react';
import Signup from "./Signup";
import {doc, getDoc } from "firebase/firestore";
import { db } from './db';
import icon from "../../public/img/LogoV3.svg"

function Navbar() {
    const [SignupIsOpen, SetSignupIsOpen] = useState(false);
    const [LoginIsOpen, SetLoginIsOpen] = useState(false);
    const [IdAcount, SetIdAcount] = useState(localStorage.getItem("IdAcount"))
    const [Acount, SetAcount] = useState("")
    const log=() => {
      if(Acount!=""){
        return
      }
     localStorage.setItem("IdAcount", IdAcount);
        async function fetchData() {
          try {
            const docRef = doc(db, "Users", IdAcount);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                SetAcount(docSnap.data());
            } else {
              console.log("No se encontró el documento");
            }
          } catch (error) {
            console.error("Error al obtener el documento:", error);
          }
        }
        fetchData();
      };
    return (
        <nav>
            {SignupIsOpen && <div className='background' onClick={() => SetSignupIsOpen(false)}>
                .
            </div>}
            {LoginIsOpen && <div className='background' onClick={() => SetLoginIsOpen(false)}>
                .
            </div>}
            {SignupIsOpen && <Signup send={SetIdAcount}></Signup>}
            {LoginIsOpen && <Login send={SetIdAcount}></Login>}
            <img id="logo" src={icon} ></img>
            <ul>
                <li><a className='buttonNav' href="/">Home</a></li>
                <li><a className='buttonNav' href="/Categorias">Genres</a></li>
                <li><a className='buttonNav' href="/Preguntas">Questions</a></li>
                <li><a className='buttonNav' href="#">Favorites</a></li>
            </ul>
            {IdAcount=="" ||  IdAcount=="null"? (
                <div>
                <button onClick={() => SetLoginIsOpen(true)} id="Login">Login</button>
                <button onClick={() => { SetSignupIsOpen(true) }} id="register">Signup</button>
            </div>
            ) : (
                <div>
                {log()}
                <h3>{Acount.name} <img style={{width:"50px",height:"25px"}} src="../public/img/user-icon.webp"/></h3>
            </div>
            )
                
            }
           
        </nav>
    );
}

export default Navbar;