import axios from 'axios';
import {
  AuthActionDefaultPropType,
  AuthActionSignupPropType,
} from '../ApiPropType';

export const isLogin = (prop: AuthActionDefaultPropType) => {
  const isLoginResponse = axios.post('url', prop);
  return isLoginResponse;
};

export const isSignup = (prop: AuthActionSignupPropType) => {
  const isSignupResponse = axios.post('url', prop);
  return isSignupResponse;
};
