import React from "react";
import { Assingto } from "./Assingto";
import { Priority } from "./Priority";
import { Description} from "./Description";
import { Toggle } from "./Toggle";
import { AddButton } from "./AddButton";
import "./HeaderCss/nav.css";
import "./HeaderCss/form.css"


export const Nav = () => {
  return (
    <nav>
      <AddButton />
      <Description />
      <Assingto />
      <Priority />
      <Toggle />
    </nav>
  );
};
