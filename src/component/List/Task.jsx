import React from "react";
import { DeleteButton } from "./DeleteButton";
import { EditButton } from "./EditButton";
import "./ListCss/task.css";

export const Task = () => {
  return (
    <li>
      <span class="dot greendot"></span>
      <p class="description">Fare la spesa</p>
      <EditButton />
      <DeleteButton />
      <p>Done ✓</p>
      
    </li>
     
  );
};
