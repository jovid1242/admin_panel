import { IMenu } from "models/layouts/IMenu";
// import { BiHomeAlt } from "react-icons/bi";
// import { CgComponents } from "react-icons/cg";
import { FaElementor, FaWpforms } from "react-icons/fa";
// import {
//   MdBackupTable,
//   MdFontDownload,
//   MdOutlineWidgets
// } from "react-icons/md";
// import { RiApps2Line, RiTableLine } from "react-icons/ri";
import { RouteNames } from "./routeNames";

export const menuItems: Array<IMenu> = [
  {
    href: "#",
    title: "Elements",
    icon: FaElementor,
    active: false,
    submenu: [
      {
        href: RouteNames.ALERTS,
        title: "Alerts"
      },
      {
        href: RouteNames.AVATAR,
        title: "Avatar"
      },
      {
        href: RouteNames.BADGES,
        title: "Badges"
      },
      {
        href: RouteNames.BUTTONS,
        title: "Buttons"
      },
      {
        href: RouteNames.COLOR_LIBRARY,
        title: "Color Library"
      },
      {
        href: RouteNames.INFOBOX,
        title: "Infobox"
      }
    ]
  }
];
