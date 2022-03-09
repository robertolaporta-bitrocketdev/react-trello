import React from "react";
import { Task } from "./Task";
import "./ListCss/lista.css"
export const ListContainer = () => {
  return (
    <div class="lista">
      <ul>
        <Task />
        <Task />
      </ul>
    </div>
  );
};
