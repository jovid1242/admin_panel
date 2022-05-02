import { IUser } from "models/auth/IUser";
import { AuthAction, AuthActions, AuthState } from "./types";

const initialState: AuthState = {
  isAuth: true,
  user: {} as IUser
};

export default function authReduser(
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActions.SET_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActions.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
