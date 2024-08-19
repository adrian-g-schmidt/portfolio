import '../Project.css';
import ProjectNav from '../ProjectNav';
import CustomPlayer from '../CustomPlayer';

export default function System() {
    return (
        <div className='project small'>
            <div className="project-header">
                <div className="project-header-content">
                    <h1>System of a Sound</h1>
                    <p className="header-description">System of a Sound is a research installation that gives voice to the hidden data of buildings through music. I designed and developed the interface and animations for the exhibition, co-authoring three academic papers on the work.</p>
                    <div className='header-col-parent'>
                        <div className="header-col">
                            <h2>Team</h2>
                            <p className="col">ANU School of Cybernetics</p>
                            <p className="col">Uncanny Valley</p>
                            <p className="col">UNSW Interactive Media Lab</p>
                        </div>
                        <div className="header-col">
                            <h2>Roles</h2>
                            <p className="col">Designer</p>
                            <p className="col">P5.js Developer</p>
                        </div>
                    </div>
                    <div className='cta-col'>
                        <span>READ THE PAPERS</span>
                        <a href="https://dl.acm.org/doi/10.1007/978-3-031-29956-8_14" className='left-marg'>
                            Using GPT-3 to Achieve Semantically Relevant Data Sonificiation for an Art Installation
                        </a>
                        <a href="https://dl.acm.org/doi/10.1145/3581754.3584119" className='left-marg'>
                            The Human-Built Environment-Natural Environment Relation
                        </a>
                        <a href="https://arxiv.org/abs/2405.11772" className='left-marg'>
                            On the Design and Study of an Installation for Office Workers to Amplify Temporal Diversity and Connection to Nature
                        </a>
                    </div>
                </div>

                <div className="project-header-image">
                    <CustomPlayer
                        url={`${process.env.PUBLIC_URL}/assets/videos/soas-video.mp4#t=0.001`}
                        playsinline={false} // Change to true if you want inline playback
                        playing={false}
                        loop={false}
                        muted={false}
                        width="100%"
                        height="auto"
                        className={"content-video crop"}
                    />    
                </div>
            </div>
            <ProjectNav index={4}></ProjectNav>
        </div>
    )
}