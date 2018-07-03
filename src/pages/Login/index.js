// @flow
import React from 'react';

import LoginComponent from '../../components/Login';

const Login = () => (
  <div>
    <h1>Login</h1>
    Login one more time!
    <LoginComponent
      onLogin={(email, password) =>
        // eslint-disable-next-line no-alert
        window.alert(`Login wanted for ${email}:${password}`)
      }
    />
  </div>
);

export default Login;
