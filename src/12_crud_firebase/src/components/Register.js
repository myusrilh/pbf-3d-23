import { useState } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { registerUser } from "../redux/actions/auth";


function Register(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleForm = e => {
        // handle signup user
        e.preventDefault();

        const { dispatch } = props;
        dispatch(registerUser(email, password));
    };
  
    const { isAuthenticated, isRegistered, registerError, isRegistering } = props;

    if (isAuthenticated) {
        return <Redirect to="/" />
    }else if(isRegistered){
        return <Redirect to="/login" />
    } else {
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
                    <div className="ml-3 my-2">
                        <Link to="/login">Login</Link>
                    </div>
                    <span>{registerError && ("Regist error")}</span>
                    <span>{isRegistering && ("Sedang Mendaftar")}</span>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
      isRegistered: state.auth.isRegistered,
      isLoading: state.auth.isLoading,
      registerError: state.auth.registerError,
      isAuthenticated: state.auth.isAuthenticated
    }
  }

export default connect(mapStateToProps)(Register);