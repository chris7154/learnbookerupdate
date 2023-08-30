import React from "react";
import logo from './images/logo.jpg'


const Head = () => {
    return (
        <>
          <section className="head">
            <div className="container flexSB">
                <div className="logo">
                    <img src={logo}  alt="logo"/>
                    <h1>LEARN-BOOKER</h1>
                    <span></span>
                </div>

                <div className="social">
                    <i className="fab fa-facebook-f icon "></i>
                    <i className="fa-brands fa-instagram icon"></i>
                    <i className="fa-brands fa-linkedin icon"></i>
                    <i className="fa-brands fa-youtube icon" ></i>
                </div>
            </div>
          </section>
        </>
    )
}

export default Head