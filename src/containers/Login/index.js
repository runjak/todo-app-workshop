// @flow
import React, { Component, type Node } from 'react';
import { Mutation } from 'react-apollo';

import LoginComponent from '../../components/Login';
import LoginMutation from './graphql/mutations/login.gql';
import type {
  LoginMutation as LoginMutationType,
  LoginResult,
} from './graphql/mutations/types';
import { saveTokenToLocalStorage } from '../../utils/authorization';

class Login extends Component<*> {
  handleLoginCompleted = ({ signIn }: LoginResult): void => {
    console.log('Gotcha!', signIn);
    saveTokenToLocalStorage(signIn);
    // FIXME add notification
  };

  handleLoginError = (error: any): void => {
    // eslint-disable-next-line no-alert
    window.alert('Something went wrong with the login!');
    // eslint-disable-next-line no-console
    console.error(error);
  };

  render(): Node {
    return (
      <Mutation
        mutation={LoginMutation}
        onCompleted={this.handleLoginCompleted}
        onError={this.handleLoginError}
      >
        {(login: LoginMutationType): Node => (
          <LoginComponent
            onLogin={(email: string, password: string): void => {
              login({ variables: { email, password } });
            }}
          />
        )}
      </Mutation>
    );
  }
}

export default Login;
