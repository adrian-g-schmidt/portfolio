import '../Project.css';
import ProjectNav from '../ProjectNav';
import ReactPlayer from 'react-player';

export default function Poster() {
    return (
        <div className='project small'>
            <div className="project-header">
                <div className="project-header-content">
                    <h1>Australian Cybernetic Interactive Poster</h1>
                    <p className="header-description">I developed motion tracking into an interactive poster designed by Kopi Su for the "Australian Cybernetic" exhibition. The poster was displayed on a digital monitor and connected to a camera that detects the viewer's proximity using Computer Vision. The poster shifts in colour as the viewer moves, creating a playful dance that embodies the creative human-computer relationship. </p>
                    <div className='header-col-parent'>
                        <div className="header-col">
                            <h2>Team</h2>
                            <p className="col">ANU School of Cybernetics</p>
                            <p className="col">Kopi Su</p>
                        </div>
                        <div className="header-col">
                            <h2>Role</h2>
                            <p className="col">Developer</p>
                        </div>
                    </div>
                    <div className='cta-col'>

                    </div>
                </div>

                <div className="project-header-image">
                    <ReactPlayer
                            playsinline
                            url={`${process.env.PUBLIC_URL}/assets/videos/poster-video.mp4`}
                            playing={true}
                            loop={true}
                            muted={true}
                            width="100%"
                            height="auto"
                            className={"content-video crop"}
                    />                    
                </div>
            </div>
            <ProjectNav index={5}></ProjectNav>
        </div>
    )
}