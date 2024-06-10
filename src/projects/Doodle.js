import '../Project.css';
import ProjectNav from '../ProjectNav';
import ReactPlayer from 'react-player';

export default function Doodle() {
    return (
        <div className='project small'>
            <div className="project-header">
                <div className="project-header-content">
                    <h1>Arduino Doodle Jump</h1>
                    <p className="header-description">I created a Doodle Jump-inspired game displayed on an 8x8 LED matrix, powered by an Arduino microcontroller. </p>
                    <div className='header-col-parent'>
                        <div className="header-col">
                            <h2>Context</h2>
                            <p className="col">CMU Project</p>
                        </div>
                        <div className="header-col">
                            <h2>Roles</h2>
                            <p className="col">Hardware Design</p>
                            <p className="col">Developer</p>
                        </div>
                    </div>
                </div>

                <div className="project-header-image">
                    <ReactPlayer
                        playsinline
                        url={`${process.env.PUBLIC_URL}/assets/videos/doodle-jump.mp4`}
                        playing={true}
                        loop={true}
                        muted={true}
                        width="80%"
                        height="auto"
                        className={"content-video crop"}
                    />                    
                </div>
            </div>
            <ProjectNav index={10}></ProjectNav>
        </div>
    )
}