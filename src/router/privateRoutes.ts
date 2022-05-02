import { IRoute } from ".";
import { RouteNames } from "./routeNames";
import Buttons from "pages/Buttons";
import Home from "pages/Home";
import Alerts from "pages/Alerts";
import Avatar from "pages/Avatar";
import Badges from "pages/Badges";
import ColorLibrary from "pages/ColorLibrary";
import Infobox from "pages/Infobox";

export const privateRoutes: IRoute[] = [
  {
    path: RouteNames.BUTTONS,
    component: Buttons,
    exact: true
  },
  {
    path: RouteNames.HOME,
    component: Home,
    exact: true
  },
  {
    path: RouteNames.ALERTS,
    component: Alerts,
    exact: true
  },
  {
    path: RouteNames.AVATAR,
    component: Avatar,
    exact: true
  },
  {
    path: RouteNames.BADGES,
    component: Badges,
    exact: true
  },
  {
    path: RouteNames.COLOR_LIBRARY,
    component: ColorLibrary,
    exact: true
  },
  {
    path: RouteNames.INFOBOX,
    component: Infobox,
    exact: true
  }
];
