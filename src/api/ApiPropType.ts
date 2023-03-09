export interface AuthActionDefaultPropType {
  username: string;
  password: string;
}

export interface AuthActionSignupPropType extends AuthActionDefaultPropType {
  name: string;
  phoneNumber: number;
  email: string;
  univ: string;
}
