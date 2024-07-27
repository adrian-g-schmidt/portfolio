import React, { forwardRef } from 'react';
import './About.css';

import HomeCanvas from './HomeCanvas.js'

const About = forwardRef((props, ref) => ( 
  <div ref={ref} id='about'>   
    <HomeCanvas></HomeCanvas>
    <div className='aboutFull' style={{pointerEvents: 'none', width: '100%', display: 'flex', justifyContent: "center", alignItems:"flex-end", position: 'absolute'}}>
      <button className="projectButton" onClick={()=>props.projectRef.current.scrollIntoView({ behavior: 'smooth' })}><img src='./assets/chevron-right.svg'></img></button>
    </div>
    <div className='aboutFull'>
      <div className='top'>
      BRINGING IDEAS
      </div>   
      <div className = 'bottom'>
      into reality
      </div>
    </div>

  </div>
));

export default About;