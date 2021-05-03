import {useContext, useState} from "react";
import {AuthContext} from "../App"
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";


function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");
    
    const Auth = useContext(AuthContext);

    const handleForm = e => {
        e.preventDefault();
        
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
            if (res.user) Auth.setLoggedIn(true);
        })
        .catch(e => {
            setErrors(e.message);
        })
        
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={e => handleForm(e)}>
                <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="email"
                />
                <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                name="password"
                type="password"
                placeholder="password"
                />
                <hr />
                <button className="googleBtn" type="button">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="logo"
                />
                Register With Google
                </button>
                <button type="submit">Register</button>
                <span>{error}</span>
            </form>
        </div>
      );
}


export default Register;