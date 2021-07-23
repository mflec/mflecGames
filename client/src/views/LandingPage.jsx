import React from 'react';
import '../styles/landingPage.css';


const LandingPage = () => {
    return (
        <div className="landing-body" >
            <div>
                <section className="landingsection">
                <h1 id="welcome">WELCOME!</h1>
                <h1 id="to-click">CLICK ON MARIO OR SOME BLOCK TO SEE GAMES</h1>
                    <div class="cloud1"></div>
                    <div class="cloud2"></div>
                    <ul class="group">
                    <a href="/home"> <li class="block"></li>
                        <li class="block"></li>
                        <li class="coin"></li>
                        <li class="box"></li>
                        <li class="block"></li>
                        <li class="block"></li>
                        <li class="mario"></li></a>
                    </ul>
                    <div class="tube"></div>
                    <div class="mountain"></div>
                    <div class="bush"></div>
                    <div class="floor"></div>
                </section>
            </div>
        </div>
    )
};

export default LandingPage;