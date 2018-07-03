// @flow
import React, { Component, type Node } from 'react';

type Props = {
  onLogin: (email: string, password: string) => void,
};

type State = {
  email: string,
  password: string,
};

class Login extends Component<Props, State> {
  state = { email: '', password: '' };

  onUpdateEmail = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;

    this.setState({ email: value });
  };

  onUpdatePassword = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;

    this.setState({ password: value });
  };

  handleLogin = () => {
    const { onLogin } = this.props;
    const { email, password } = this.state;

    onLogin(email, password);
  };

  render(): Node {
    const { email, password } = this.state;

    return (
      <div>
        Email:
        <input value={email} onChange={this.onUpdateEmail} />
        Password:
        <input value={password} onChange={this.onUpdatePassword} />
        <button type="button" onClick={this.handleLogin}>
          Login!
        </button>
      </div>
    );
  }
}

export default Login;
