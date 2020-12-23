import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className='container d-flex align-items-center justify-content-around nav-tabs'>
            <h1>Todo App</h1>
            <NavLink className='nav-link' to='/home' >Home</NavLink>
            <NavLink className='nav-link' to='/' exact>About</NavLink>
        </div>
    )
}

export default Header;