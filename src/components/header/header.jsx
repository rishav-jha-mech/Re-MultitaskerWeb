import React from 'react'
import './header.css';
import Navbar from '../Navbar/Navbar'


export default function Header () {  
    
    return (
        <>
            
            <Navbar />

            <div className="welcome-area" id="welcome">

                <div className="header-text">
                    <div className="container">
                        <div className="row">
                            <div className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                <h1>Get Your Job <em>DONE</em> By Experts</h1>
                                <p>Multitasker helps you get more time back in your day! You
                                    can book tasks from a variety of categories to best suit
                                    your needs.</p>
                                <a href="about" className="main-button-slider">KNOW US BETTER</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}