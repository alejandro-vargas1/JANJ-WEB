import React from 'react';
import '../../App.css';
import '../../styles/about/About.css'

function About() {
    return (
        <section className="about">
            <div className="about">
                <h1>Testimonios</h1>
                    <div className="container-about">
                        <img src="profile-user.png" />   
                        <span>Chris Fox.</span> 
                        <p>John Doe saved us from a web disaster.</p>
                    </div>  
                    <div className="container-about">
                        <img src="profile-user.png" />   
                        <span>Chris Fox.</span> 
                        <p>John Doe saved us from a web disaster.</p>
                    </div>
                    <div className="container-about">
                        <img src="profile-user.png" />   
                        <span>Chris Fox.</span> 
                        <p>John Doe saved us from a web disaster.</p>
                    </div>  
                
            </div>
        </section>

    );
  }
  
  export default About
  