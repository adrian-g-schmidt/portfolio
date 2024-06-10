import '../Project.css';
import ProjectNav from '../ProjectNav';

export default function System() {
    return (
        <div className='project small'>
            <div className="project-header">
                <div className="project-header-content">
                    <h1>System of a Sound</h1>
                    <p className="header-description">I designed and developed the interface and animations for an exhibition giving voice to the hidden data of buildings through music, co-authoring three academic papers on the exhibition. </p>
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
                            <img src={`${process.env.PUBLIC_URL}/assets/chevron-right.svg`} alt="right arrow" />
                        </a>
                        <a href="https://dl.acm.org/doi/10.1145/3581754.3584119" className='left-marg'>
                            The Human-Built Environment-Natural Environment Relation
                            <img src={`${process.env.PUBLIC_URL}/assets/chevron-right.svg`} alt="right arrow" />
                        </a>
                        <a href="https://arxiv.org/abs/2405.11772" className='left-marg'>
                            On the Design and Study of an Installation for Office Workers to Amplify Temporal Diversity and Connection to Nature
                            <img src={`${process.env.PUBLIC_URL}/assets/chevron-right.svg`} alt="right arrow" />
                        </a>
                    </div>
                </div>

                <div className="project-header-image">
                    <video width="100%" controls className='header-main'>
                        <source src={`${process.env.PUBLIC_URL}/assets/videos/soas-video.mp4#t=0.001`} type="video/mp4"/>
                    Your browser does not support the video tag.
                    </video>         
                </div>
            </div>
            <ProjectNav index={4}></ProjectNav>
        </div>
    )
}