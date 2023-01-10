import React, {useRef, useState} from 'react';
import facade from "../utils/apiFacade.js";

function Login({setLoggedIn, setErrorMsg, setUsername, setRoles}) {
    const init = {username: "", password: ""};
    const [loginCredentials, setLoginCredentials] = useState(init);

    const performLogin = (evt) => {
        evt.preventDefault();
        login(loginCredentials.username, loginCredentials.password);
    }

    const login = (user, pass) => {
        facade.login(user, pass, setRoles)
            .then(res => {setLoggedIn(true)
                setUsername(user)})

    }

    const onChange = (evt) => {
        setLoginCredentials({...loginCredentials, [evt.target.id]: evt.target.value})
    }

    return (
        <div className="login-container">
            <form>
                <input onChange={onChange} type="text" placeholder="Username" id="username"/>{" "}
                <input onChange={onChange} type="text" placeholder="Password" id="password"/>
                <button onClick={performLogin} type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;
