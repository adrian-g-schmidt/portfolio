import '../Project.css';
import ProjectNav from '../ProjectNav';
import ReactPlayer from 'react-player';

export default function Backwash() {
    return (
        <div className='project small'>
            <div className="project-header">
                <div className="project-header-content">
                    <h1>Backwash Homepage</h1>
                    <p className="header-description">The Backwash Homepage is an interactive landing page for an Australian T-Shirt company, designed with the aesthetics of a CRT monitor. I developed the site, using JS and CSS to create pixelated eyes that track the user's cursor.</p>
                    <div className='header-col-parent'>
                        <div className="header-col">
                            <h2>Team</h2>
                            <p className="col">Backwash</p>
                        </div>
                        <div className="header-col">
                            <h2>Roles</h2>
                            <p className="col">Developer</p>
                        </div>
                    </div>
                    <div className='cta-col'>
                        <a href="https://backwash.online/">
                            VISIT THE SITE HERE
                        </a>
                    </div>
                </div>

                <div className="project-header-image">
                    <ReactPlayer
                        playsinline
                        url={`${process.env.PUBLIC_URL}/assets/videos/backwash.mp4`}
                        playing={true}
                        loop={true}
                        muted={true}
                        width="100%"
                        height="auto"
                        className={"content-video crop"}
                    />                    
                </div>
            </div>
            <ProjectNav index={6}></ProjectNav>
        </div>
    )
}