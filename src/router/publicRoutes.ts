import { IRoute } from ".";
import Login from "pages/Login";
import { RouteNames } from "./routeNames";

export const publicRoutes: IRoute[] = [
    {
        path: RouteNames.LOGIN,
        component: Login,
        exact: true
    }
]