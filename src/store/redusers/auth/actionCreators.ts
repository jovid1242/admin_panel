import { IUser } from "models/auth/IUser";
import { AppDispatch } from "store";
import { AuthActions, SetAuthAction, SetUserAction } from "./types";

export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActions.SET_USER,
    payload: user
  }),
  setIsAuth: (isAuth: boolean): SetAuthAction => ({
    type: AuthActions.SET_AUTH,
    payload: isAuth
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {}
};
