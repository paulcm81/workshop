import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from '../logo.png' //just a link to logo
import {ButtonContainer, NavWrapper} from './Styled'

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 d-flex">
              
                <ul className="navbar-nav align-items-center flex-grow-1">
                    <li className="nav-item ml-5">
                        <Link to='/' className='nav-link'>Ecommerce</Link>
                    </li>
                </ul>

                   

                
            </NavWrapper>
        );
    }
}


export default Navbar;