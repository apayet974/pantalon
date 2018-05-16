import React from 'react';
import dog from '../images/dog.png';
import Navigation from './Navigation';


const About = () => (

  <div>
    <Navigation/>

    Hello
    <img src={dog} className="small-img"/>
  </div>
);

export default About;
