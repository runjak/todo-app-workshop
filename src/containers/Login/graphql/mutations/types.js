// @flow

export type LoginVariables = {
  email: string,
  password: string,
};

export type LoginMutation = ({ variables: LoginVariables }) => void;

export type LoginResult = {
  signIn: string,
};
