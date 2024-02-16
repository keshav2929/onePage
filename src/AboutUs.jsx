import React, { useState } from 'react';
import howToUseApp from './API/HowToUse';

const AboutUs = () => {

    const [aboutData,setAboutData]=useState(howToUseApp);

  return (
    <>
        <section className="common-section our-services" id='sectionId'>
            <div className='container mb-5'>
                <div className="row">
                    <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                        <img src="./images/hero3.jpg" alt="AboutUS!" />
                    </div>
                    <div className="col-12 col-lg-7 our-services-list">
                        <h3 className="mini-title">
                            -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                        </h3>
                        <h1 className="main-heading">How to use this App?</h1>

                        {aboutData.map((curElem)=>{
                            const {id,title,info}=curElem;
                            return(
                                <>
                                    <div className="row our-services-info">
                                        <div className="col-1 our-services-number">{id}</div>
                                        <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className="main-hero-para">{info}</p>
                                        </div>
                                    </div>
                                </>
                            );
                        })}

                        
                        <br />
                        <button className="btn-style btn-style-border">learn more</button>
                    </div>
                </div>
            </div>
        </section>

        {/* ------------------------2nd Section--------------------------- */}

        <section className="common-section our-services our-services-rightside ">
            <div className='container mb-5'>
                <div className="row">
                    
                    <div className="col-12 col-lg-7 our-services our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
                        <h3 className="mini-title">
                            -- SUPPORT IN ANY LANGUAGES
                        </h3>
                        <h1 className="main-heading">World class support is<br />available 24/7</h1>

                        {aboutData.map((curElem)=>{
                            const {id,title,info}=curElem;
                            return(
                                <>
                                    <div className="row our-services-info">
                                        <div className="col-1 our-services-number">{id}</div>
                                        <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className="main-hero-para">{info}</p>
                                        </div>
                                    </div>
                                </>
                            );
                        })}

                        
                        <br />
                        <button className="btn-style btn-style-border">learn more</button>
                    </div>

                    <div className="col-12 col-lg-5 our-service-rightside-img">
                        <img src="./images/callcenter.jpg" alt="AboutUS!" />
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default AboutUs