export interface User {
  _id: string;
  email: string;
  avatar: string;
  displayName: string;
  token: string;
  facebookId?: string;
  googleId?: string;
}

export interface RegisterUserData {
  [key: string]: any;
  email: string;
  password: string;
  avatar: string;
  displayName: string;
}

export interface LoginUserData {
  email: string;
  password: string;
}

export interface LoginSocialUserData {
  authToken: string;
  id: string;
  email: string;
  name: string;
  photoUrl: string;
}

export interface FieldError {
  message: string;
}

export interface RegisterError {
  errors: {
    email?: undefined | FieldError;
    password?: undefined | FieldError;
    avatar?: undefined | FieldError;
    displayName?: undefined | FieldError;
  }
}

export interface LoginError {
  error: string;
}
