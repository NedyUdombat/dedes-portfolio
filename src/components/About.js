import React, { Component } from 'react';

import '../assets/stylesheet/about.css';

import Avatar from '../assets/images/avatar.png';

class About extends Component {
  render() {

    return (
      <header id="about">
      <section className="row">
         <div className="img-div">
           <img src={Avatar} class="headshot" alt="Nnamdi's Head shot" />
         </div>

         <div className="details">
            <h2>
               Who Am I?
            </h2>

            <p>
               Well, my name is Nnamdi Okafor. I am a 24-year-Old Growth Marketer.  I currently work at Bundle as a Growth Analyst. I spend most of my time thinking of Growth models, acquisition channels, activation and the entire Growth funnel, I am a firm believer of Product led growth. When I am not working, I am either cracking dry jokes or involved in some football banter(PS: I am a shameless Arsenal fan).

I am currently the Facilitator of the Growth Academy. A free program designed to train 20 bright minds into becoming the next-gen of Growth marketers.

            </p>
         </div>
      </section>

   </header>
    );
  }
}

export default About;
