import React from 'react'
import {NavLink} from 'react-router-dom'
import './nav.css'

const NavBar = () => (
    <div>
        <div>
            <NavLink exact to="/" className="blue">ComponentA</NavLink><br/>
            <NavLink to="/componentb" activeClassName="active" style={{color:'#2BAB40',fontSize:'14px'}}>ComponentB</NavLink><br/>
            <NavLink exact to="/componentc/ILoveWeb/HelloReact" activeClassName="active" className="blue">ComponentC传值</NavLink><br/>
            <NavLink to="/notfound" activeClassName="active">404</NavLink><br/>
            <NavLink to="/redirect" activeClassName="active">redirect</NavLink><br/>
        </div>
    </div>
)

export default NavBar