import React from 'react';
import './App.css';
import {ShopCards} from "./components/ShopCards";
import {BasketIconButton} from "./components/BasketIconButton";
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export function App(props) {

    return (
        <div className="App">
            <Navbar fixed="top" dark expand="md" className="main-navbar">
                <Nav navbar>
                    <div className="placeholder"></div>
                    <div className="cv-text">CV</div>
                    <NavItem>
                        <BasketIconButton/>
                    </NavItem>
                </Nav>
            </Navbar>

            <div className="header">Laura Herma</div>
            <Navbar light className="secondary-navbar">
                <Nav>
                    <NavLink>Portfolio pood</NavLink>
                    <NavLink target="_blank" href="https://github.com/lauraherma/">GitHub</NavLink>
                    <NavLink target="_blank" href="/assets/CV_Laura_Herma.pdf">Minu CV</NavLink>
                </Nav>
            </Navbar>
            <ShopCards/>
        </div>
    );
}


export default App;
