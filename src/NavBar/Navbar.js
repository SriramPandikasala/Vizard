import React, { Component } from 'react'
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-primary text-white">
                    <div className="navbar-brand" >
                        <div className="logo"><i className="far fa-id-badge"></i></div>
                        <div className="appName d-inline-block align-top">Vizard</div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Navbar
