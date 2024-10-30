import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import williamImage from './images/william.jpg';
import './styles/AboutMe.css';

const About = () => {
    return (
        <div className="about-page">
            <NavBar />
            <p><br/></p>  
            <section className="about-section">
            <img src={williamImage} alt="William Shepherd" className="profile-pic"/>
                <div className="about-text">
                    <p>
                        A wanderer in the urban labyrinth, <b>William (盧凱偉) </b>seeks to capture the fleeting moments of solitude and the stark beauty 
                        of the night. His photographs, drenched in rain and illuminated by neon, explore the tension between tradition and modernity. 
                        Through his lens, he invites you to lose yourself in the quietude of the city, where the past and the future collide.
                    </p>
                    <p>
                    Shepherd’s work, inspired by the dystopian aesthetics of Akira, Ghost in the Shell, and Blade Runner,  invites viewers to contemplate the 
                    nature of existence in a rapidly changing world.
                    </p>

                    <p>
                        Equipment: Google Pixel 7A<br />
                        Software: Adobe Lightrooms<br />
                        Web Dev Tools: Javascript, React, HTML, CSS
                        <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </p>

                </div>
            </section>
            <Footer />
        </div>
    );
};

export default About;