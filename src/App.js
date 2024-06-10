import { React, useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation, useNavigate} from "react-router-dom";

import './App.css';
import './Fonts.css';
import Projects from './Projects';
import About from './About';

import Sonic from './projects/Sonic';
import MixedReality from './projects/MR';
import Panic from './projects/Panic';
import System from './projects/System';
import Backwash from './projects/Backwash';
import Doodle from './projects/Doodle';
import Habit from './projects/Habit';
import Poster from './projects/Poster';
import Ukulele from './projects/Ukulele';
import Artwalk from './projects/Artwalk';
import Futures from './projects/Futures';
import Star from './projects/Star';
import Woroni from './projects/Woroni';
import Ping from './projects/Ping';




import ReactGA from "react-ga4";
ReactGA.initialize('G-MSPZLVKWK8');




function App() {
  const location = useLocation();
  const [menuShowing, setMenuShowing] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);
  const animatedDivRef = useRef(null);
  const topRef = useRef(null);
  const projectRef = useRef(null);
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [scrollAtTop, setScrollAtTop] = useState(false);

  // Google tracking for each apge
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname, title: location.pathname });
  }, [location]);

  
  useEffect(() => {
    if ((location.pathname === "/" && displayLocation.pathname === "/projects") || (location.pathname === "/projects" && displayLocation.pathname === "/")){
      setDisplayLocation(location);
    }
    else if (location.pathname !== displayLocation.pathname) {
        animatedDivRef.current.className = "content-parent fadeOut"; // Trigger fadeOut animation
    }
    setMenuShowing(false);
  }, [location, displayLocation]);

  useEffect(() => {
    if (displayLocation.pathname === '/projects') {
      const projectsElement = document.getElementById('projects');
      if (projectsElement) {
        projectsElement.scrollIntoView();
      }
    }
  }, [displayLocation]);


  useEffect(() => {
    const handleScroll = () => {
      if (topRef.current && scrollRef.current) {
        const rect = topRef.current.getBoundingClientRect();
        setScrollAtTop(rect.top === 50);
      }
    };
  
    const scrollElement = scrollRef.current;
  
    if (scrollElement) {
      // Trigger the scroll handler immediately on mount
      handleScroll(); 
  
      scrollElement.addEventListener('scroll', handleScroll);
  
      return () => {
        scrollElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, [topRef, scrollRef]); // Include refs in the dependency array

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.001 && displayLocation.pathname === '/projects' && scrollRef.current) {
          navigate('/', { replace: true });
        } else if (entry.intersectionRatio < 0.001 && displayLocation.pathname === '/' && scrollRef.current){
          navigate('/projects', { replace: true });
        }
      });
    }, {
      threshold: 0.001,
    });

    const currentRef = topRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [navigate, displayLocation, location]);


  return (
    <div className="App">
      {/* <Cursor></Cursor> */}
      <header>
            <div id='home'>
              <div id='name' className={`${scrollAtTop ? 'bigName' : ''}`}>adrian schmidt</div>
            </div>
            <nav>
            <div className="hamburger" onClick={() => setMenuShowing(!menuShowing)}>
              ☰
            </div>
            <ul id="navigation" className={menuShowing ? 'showNav' : ''}>
              <li className={useLocation().pathname === '/projects' ? 'highlighted': ''}>
                {useLocation().pathname === '/' ?  <Link to="/" className='button' onClick={() => {if (projectRef.current) projectRef.current.scrollIntoView({ behavior: 'smooth' })}}>PROJECTS</Link> : <Link to="/projects" className='button'>PROJECTS</Link>}
              </li>
              <li className={useLocation().pathname==='/' ? 'highlighted': ''}>
                {useLocation().pathname === '/projects' ?  <Link to="/projects" className='button' onClick={() => {if (topRef.current) topRef.current.scrollIntoView({ behavior: 'smooth' })}}>HOME</Link> : <Link to="/" className='button'>HOME</Link>}
              </li>
            </ul>
            </nav>
      </header>


        <div
          className={'content-parent'}
          ref={animatedDivRef}
          onAnimationEnd={() => {
              setDisplayLocation(location);
              animatedDivRef.current.className = "content-parent fadeIn";
          }}
        >

        <Routes location={displayLocation}>
          <Route path="/" element={<div className='homePage' ref={scrollRef}><About ref={topRef} projectRef={projectRef}></About><Projects ref={projectRef}></Projects></div>} />
          <Route path="/projects" element={<div className='homePage' ref={scrollRef}><About ref={topRef} projectRef={projectRef}></About><Projects ref={projectRef}></Projects></div>} />
          <Route path="/projects/sonic" element={<><Sonic></Sonic></>} />
          <Route path="/projects/mrnavigation" element={<><MixedReality></MixedReality></>} />
          <Route path="/projects/panic" element={<><Panic></Panic></>} />
          <Route path="/projects/system" element={<><System></System></>} />
          <Route path="/projects/artwalk" element={<><Artwalk></Artwalk></>} />
          <Route path="/projects/backwash" element={<><Backwash></Backwash></>} />
          <Route path="/projects/doodlejump" element={<><Doodle></Doodle></>} />
          <Route path="/projects/futures" element={<><Futures></Futures></>} />
          <Route path="/projects/habithelper" element={<><Habit></Habit></>} />
          <Route path="/projects/cyberneticposter" element={<><Poster></Poster></>} />
          <Route path="/projects/coasters" element={<><Star></Star></>} />
          <Route path="/projects/ukulele" element={<><Ukulele></Ukulele></>} />
          <Route path="/projects/ping" element={<><Ping></Ping></>} />
          <Route path="/projects/woroni" element={<><Woroni></Woroni></>} />
        </Routes> 
      </div>
    </div>
  );
}

export default App;