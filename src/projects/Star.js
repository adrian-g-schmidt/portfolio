import '../Project.css';
import ProjectNav from '../ProjectNav';
import ReactPlayer from 'react-player';

export default function Star() {
    return (
        <div className='project small'>
            <div className="project-header">
                <div className="project-header-content">
                    <h1>Cybernetic Star Coasters</h1>
                    <p className="header-description">I designed coasters with spinning interiors to provide to KPMG Australia executives as part of our workshops on systems thinking. Based on one of the School of Cybernetics educational tools, I laser-cut and constructed the coasters, distributing them as gifts to encourage ongoing reflection beyond the sessions. </p>
                    <div className='header-col-parent'>
                        <div className="header-col">
                            <h2>Team</h2>
                            <p className="col">ANU School of Cybernetics</p>
                        </div>
                        <div className="header-col">
                            <h2>Roles</h2>
                            <p className="col">Designer</p>
                            <p className="col">Manufacture</p>
                        </div>
                    </div>
                </div>

                <div className="project-header-image">
                    <ReactPlayer
                        playsinline
                        url={`${process.env.PUBLIC_URL}/assets/videos/star-photo.mp4`}
                        playing={true}
                        loop={true}
                        muted={true}
                        width="100%"
                        height="auto"
                        className={"content-video crop"}
                    />                    
                </div>
            </div>
            <ProjectNav index={9}></ProjectNav>
        </div>
    )
}