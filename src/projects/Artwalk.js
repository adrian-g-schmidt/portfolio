import '../Project.css';
import ProjectNav from '../ProjectNav';
import ReactPlayer from 'react-player';

export default function Artwalk() {
    return (
        <div className='project small'>
            <div className="project-header">
                <div className="project-header-content">
                    <h1>ARtWalk</h1>
                    <p className="header-description">I designed and produced visual prototypes of a mixed reality experience that imagined how we could interact with public art in the future. I then brought this vision to life using After Effects to edit a live action preview of the product. </p>
                    <div className='header-col-parent'>
                        <div className="header-col">
                            <h2>Context</h2>
                            <p className="col">CMU Group Project</p>
                        </div>
                        <div className="header-col">
                            <h2>Roles</h2>
                            <p className="col">Concept Designer</p>
                            <p className="col">VFX</p>
                            <p className="col">Video Editing</p>
                        </div>
                    </div>
                    <div className='cta-col'>
                        <a href="https://drive.google.com/file/d/15Tevr67OhOhqWv67L1nhvP3Bh_Vzwv3C/view?usp=sharing">
                            WATCH THE FULL VIDEO HERE
                            <img src={`${process.env.PUBLIC_URL}/assets/chevron-right.svg`} alt="right arrow" />
                        </a>
                    </div>
                </div>

                <div className="project-header-image">
                    <ReactPlayer
                            playsinline
                            url={`${process.env.PUBLIC_URL}/assets/videos/artwalk-cut.mp4`}
                            playing={true}
                            loop={true}
                            muted={true}
                            width="100%"
                            height="auto"
                            className={"content-video crop"}
                    />                    
                </div>
            </div>
            <ProjectNav index={12}></ProjectNav>
        </div>
    )
}