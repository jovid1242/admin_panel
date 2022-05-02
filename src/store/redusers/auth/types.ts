import { IUser } from "models/auth/IUser";

export interface AuthState {
  isAuth: boolean;
  user: IUser;
}

export enum AuthActions {
  SET_AUTH = "SET_AUTH",
  SET_USER = "SET_USER"
}

export interface SetAuthAction {
  type: AuthActions.SET_AUTH;
  payload: boolean;
}
export interface SetUserAction {
  type: AuthActions.SET_USER;
  payload: IUser;
}
export type AuthAction = SetAuthAction | SetUserAction;
