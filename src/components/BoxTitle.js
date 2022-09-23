import React from 'react';
import { NavLink } from "react-router-dom";

function Boxtitle(props) {
    return (
        <div className="content">
        <div className="container">
            <div className="BoxContent">
                <div className="BoxTitleContainer">
                    <h1 className="Title GreenTitle PurpleBG">
                    {props.title}
                    </h1>
                </div>
                <div>
                    {props.content}
                </div>
                <div className="BtnContainer">
                    <NavLink to="/">
                    <img src="./btn-next.png" alt="" />
                    </NavLink>
                </div>
                
            </div>
        </div>
    </div>
    );
}



   
 

export default Boxtitle;