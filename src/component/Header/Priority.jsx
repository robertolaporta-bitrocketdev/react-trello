import React from "react";

export const Priority = ()=>{
    return(
        <form>
        <p>Priority:</p>
        <select class="rounded form" name="priority" >
        <option value="Priorità: Bassa">Priorità: Bassa </option>
        <option value="Priorità: Media">Priorità: Media </option>
        <option value="Priorità: Alta">Priorità: Alta</option>
        </select>
      
      </form>
    )
}