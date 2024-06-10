import React, { forwardRef } from 'react';
import './About.css';

import Test from './Test.js'

const About = forwardRef((props, ref) => ( 
  <div ref={ref} id='about'>   
    <Test></Test>
    <div className='aboutFull' style={{pointerEvents: 'none', height: 'calc(100vh - 50px)', width: '100%', display: 'flex', justifyContent: "center", alignItems:"flex-end", position: 'absolute'}}>
      <button className="projectButton" onClick={()=>props.projectRef.current.scrollIntoView({ behavior: 'smooth' })}>↓</button>
    </div>
    <div className='aboutFull'>
      <div className='top'>
      I BRING IDEAS
      </div>   
      <div className = 'bottom'>
      into reality
      </div>
    </div>

  </div>
));

export default About;