import React, { Component } from 'react'
import './header.css'

    function header() {
        return (
            <div>
                <div className="hbar">

                <a href="#" className="menu" className="hmenu">SHOPPINGKART.COM</a>
                    <div>
                    <a href="Home" className="menu">Home</a>
                    <a href="Profile" className="menu">Profile</a>
                    <a href="Profile" className="menu">Categories</a>
                    </div>
                    

                    <div className="hbar" className="searchbar" >
                    <input type="Search Here"  />
                   <button >search</button>
                    

                   <a href="#" className="menu" id="kart">Kart</a>
                   </div>
                </div>
            </div>
        )
    }


export default header
