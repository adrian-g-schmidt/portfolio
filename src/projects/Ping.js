import '../Project.css';
import ProjectNav from '../ProjectNav';
import ReactPlayer from 'react-player';

export default function Ping() {
    return (
        <div className='project small'>
            <div className="project-header">
                <div className="project-header-content">
                    <h1>Ping 3D Web Game</h1>
                    <p className="header-description">Ping is a 3D version of Pong with synth-wave aesthetics. I designed and developed the game using Three.js and React, making it compatible with desktop and mobile devices.</p>
                    <div className='header-col-parent'>
                        <div className="header-col">
                            <h2>Context</h2>
                            <p className="col">CMU Project</p>
                        </div>
                        <div className="header-col">
                            <h2>Roles</h2>
                            <p className="col">React Developer</p>
                            <p className="col">Three.js Developer</p>
                            <p className="col">Designer</p>
                        </div>
                    </div>
                    <div className='cta-col'>
                        <a href="https://adrian-g-schmidt.github.io/final-project/ping/">
                            PLAY IT HERE
                        </a>
                    </div>
                </div>

                <div className="project-header-image">
                    <ReactPlayer
                            playsinline
                            url={`${process.env.PUBLIC_URL}/assets/videos/ping.mp4`}
                            playing={true}
                            loop={true}
                            muted={true}
                            width="80%"
                            height="auto"
                            className={"content-video crop"}
                    />                    
                </div>
            </div>
            <ProjectNav index={7}></ProjectNav>
        </div>
    )
}