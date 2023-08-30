import React from "react"
import Heading from "../../common/header/Header"
import "./Hero.css"
import Title from "../../common/title/Title"


const Hero = () => {
    return (
      <>
        <section className="hero">
          <div className="container">
            <div className="row">
              <Title subtitle='WELCOME TO LEARN-BOOKER' title='best Online Finance Education' />
              <p>Learn booker is a site where you learn of anything finance</p>
              <div className="button">
                <button className="primary-button">
                  GET STARTED NOW < i className="fa fa-long-arrow-alt"></i>
                </button>
                <button className="primary-btn" >
                  VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="margin"></div>
      </>
    )
}

export default Hero