import '../Project.css';
import ProjectNav from '../ProjectNav';
import ReactPlayer from 'react-player';

export default function Woroni() {
    return (
        <div className='project small'>
            <div className="project-header">
                <div className="project-header-content">
                    <h1>Woroni Magazine Designs</h1>
                    <p className="header-description">I designed illustrations for the ANU magazine, collaborating closely with authors to translate their ideas into visuals. I produced six pieces per magazine in a week timeframe, and filled in as lead designer coordinating artists and authors, and laying out the magazine.</p>
                    <div className='header-col-parent'>
                        <div className="header-col">
                            <h2>Role</h2>
                            <p className="col">Graphic Designer</p>
                        </div>
                        <div className="header-col">
                            <h2>Tools</h2>
                            <p className="col">Illustrator</p>
                            <p className="col">Blender</p>
                            <p className="col">InDesign</p>
                        </div>
                    </div>
                    <div className='cta-col'>
                        <a href="https://issuu.com/woroni/docs/edition_2_013b5540c06d9e/30">
                            READ AN ISSUE HERE
                            <img src={`${process.env.PUBLIC_URL}/assets/chevron-right.svg`} alt="right arrow" />
                        </a>
                    </div>
                </div>

                <div className="project-header-image">
                    <ReactPlayer
                            playsinline
                            url={`${process.env.PUBLIC_URL}/assets/videos/woroni-vid.mp4`}
                            playing={true}
                            loop={true}
                            muted={true}
                            width="100%"
                            height="auto"
                            className={"content-video crop"}
                    />                    
                </div>
            </div>
            <ProjectNav index={13}></ProjectNav>
        </div>
    )
}