//component
//react function based component(rfc)
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                          
                        </li>
                      
                        <li className="nav-item">
                            <Link className="nav-link" to="/about1">Charts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Items</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/apitest">API-Test</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/homepage">Home-Test</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button cla
                        ssName="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };

                        // prop types means(Prop ka kya type hai) kuch bhei set kar sakte value like string means tiltel will always be string kuch aur dala tho error aayega
//isRequired
//default props means agar kuch pass nahi keya tho ye lekh ke aayega
