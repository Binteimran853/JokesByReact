import React from "react"

export default function Joke(props) {
    return (
        <div>
            <h3 style={{display:props.setup? "block":"none"}}>Setup: {props.setup}</h3>
           {props.punchline && <p>Punchline: {props.punchline}</p>}
            <hr />
        </div>
    )
}