import { createElement } from "react";
import {
  FaBasketball,
  MdCasino,
  IoGameControllerOutline,
  BsInfoCircle,
  FaQuestion,
  FaRegAddressBook,
  FaBlogger,
} from "../assets/icons";

export const websiteNavArr = [
  { id: 1, title: "Sport", icon: createElement(FaBasketball), path: "/sport" },
  {
    id: 2,
    title: "Live Casino",
    icon: createElement(MdCasino),
    path: "/sport",
  },
  {
    id: 3,
    title: "Virtual Games",
    icon: createElement(IoGameControllerOutline),
  },
];

export const websiteSideBarArr = [
  { id: 1, title: "About", path: "/about", icon: createElement(BsInfoCircle) },
  { id: 2, title: "Blog", path: "/blog", icon: createElement(FaBlogger) },
  {
    id: 3,
    title: "Responsible Gambling",
    path: "/responsible-gambling",
    icon: createElement(FaRegAddressBook),
  },
  { id: 4, title: "FAQs", path: "/faqs", icon: createElement(FaQuestion) },
];
