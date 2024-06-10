import '../Project.css';
import ProjectNav from '../ProjectNav';
import ReactPlayer from 'react-player';

export default function Futures() {
    return (
        <div className='project small'>
            <div className="project-header">
                <div className="project-header-content">
                    <h1>Futures Spinner</h1>
                    <p className="header-description">For workshops held at Meta, I designed and manufactured a custom spinning chamber for participant interaction and creative ideation of responsible technology futures.</p>
                    <div className='header-col-parent'>
                        <div className="header-col">
                            <h2>Team</h2>
                            <p className="col">ANU School of Cybernetics</p>
                        </div>
                        <div className="header-col">
                            <h2>Roles</h2>
                            <p className="col">CAD Design</p>
                            <p className="col">Laser Cutting and Manufacture</p>
                        </div>
                    </div>
                </div>

                <div className="project-header-image">
                    <ReactPlayer
                            playsinline
                            url={`${process.env.PUBLIC_URL}/assets/videos/spinner.mp4`}
                            playing={true}
                            loop={true}
                            muted={true}
                            width="100%"
                            height="auto"
                            className={"content-video crop"}
                    />                    
                </div>
            </div>
            <ProjectNav index={11}></ProjectNav>
        </div>
    )
}