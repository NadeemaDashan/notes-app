import React ,{useState} from "react";
import "./Intro.css"
export default function Intro(props){

    return(
        <main>
            <div className="intro xs-col-3">
                <button className="mode-changer" onClick={props.mode}>change mode</button>
                <h1>You have no new notes</h1>
                <button className="btn-intro" onClick={props.event}>Let's create a one</button>
            </div>
        </main>
    )
}