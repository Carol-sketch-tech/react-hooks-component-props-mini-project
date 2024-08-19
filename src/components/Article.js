import React from "react";

export default function Article({title,date,preview}){
    const defaultDate="January 1, 1970";
    return(
           <article>
            <h3>{title || defaultDate }</h3>
            <small>{date}</small>
            <p>{preview}</p>
           </article>
    )
}