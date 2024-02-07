import React from "react";
import "./SideBar.css"
import AddTask from "./AddTask";

export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="add-task">
                <AddTask/>
            </div>
        </div>
    )
}