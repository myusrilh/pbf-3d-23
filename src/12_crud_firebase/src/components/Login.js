import { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { loginUser } from "../redux/actions/auth";

function Login (props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = e => {
    e.preventDefault();

    const { dispatch } = props;
    dispatch(loginUser(email, password));
  };

  const { isLoggingIn, loginError, isAuthenticated } = props;

  if (isAuthenticated) {
    return <Redirect to="/" />
  } else {
    return (
      <div className="mt-5">
        <h1>Login</h1>
        
        <form onSubmit={e => handleForm(e)}>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="email"
            required
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
            type="password"
            placeholder="password"
            required
          />
          <hr/>
          <button type="submit">Login</button>
          <hr />
          <div className="ml-3 my-2">
            <Link to="/register">Register</Link>
          </div>
          <hr />
          <span>{loginError && ("Email atau Password Salah!")}</span>
          <span>{isLoggingIn && ("Sedang login ...")}</span>
        </form>
      </div>
    );
  }
  
}

function mapStateToProps(state){
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Login);