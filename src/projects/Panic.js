import '../Project.css';
import ProjectNav from '../ProjectNav';
import ReactPlayer from 'react-player';

export default function Panic() {
    return (
        <div className='project'>
            <div className="project-header">
                <div className="project-header-content">
                    <h1>PANIC</h1>
                    <p className="header-description">I created an interactive generative AI artwork, engaging thousands of visitors and serving as a key educational tool in executive workshops.</p>
                    <div className='header-col-parent'>
                        <div className="header-col">
                            <h2>Collaborators</h2>
                            <p className="col">Dr. Ben Swift (ANU School of Cybernetics)</p>
                        </div>
                        <div className="header-col">
                            <h2>Roles</h2>
                            <p className="col">Design</p>
                            <p className="col">Technical Implementation</p>
                            <p className="col">Fabrication</p>
                        </div>
                    </div>
                    <a href="https://cybernetics.anu.edu.au/news/2022/11/22/panic-a-serendipity-engine/">
                        READ MORE ABOUT PANIC!
                    </a>
                </div>

                <div className="project-header-image">
                    <ReactPlayer
                        playsinline
                        url={`${process.env.PUBLIC_URL}/assets/videos/panic-sequence.mp4`}
                        playing={true}
                        loop={true}
                        muted={true}
                        width="100%"
                        height="auto"
                        className={"content-video"}
                    />      
                </div>
            </div>
            <div className='full-banner' style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/panic-terminal.jpg"})`,
                backgroundSize: 'cover',
                backgroundPosition: "center",
            }}
                title="Someone standing at a black computer terminal, with multiple screens displaying the outputs of different AI models.">
            </div>
            <div className='project-content'>
                <div>
                    <h2>Conceptualizing an AI Playground</h2>
                    <p>Collaborating with Dr. Ben Swift, we envisioned and developed PANIC! (Playground AI Network for Interactive Creativity), a system enabling users to rapidly experiment with multiple generative AI models in a chain-like fashion. After an initial showcase at the Creative AI Sydney Conference, we expanded PANIC! into an interactive public installation. I designed and built the physical installation, featuring split-flap Vestaboards, television screens, and a custom input terminal with a "panic button" to trigger the AI model cycle, primarily focusing on image generation and description models.</p>
                </div>
                <div className='figure content-video'>
                    <video width="100%" controls>
                            <source src={`${process.env.PUBLIC_URL}/assets/videos/panic-news.mp4#t=0.001`} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>      
                    <div className='caption'>
                        News coverage of PANIC! at the exhibition.
                    </div>
                </div>                  
                <div>
                    <h2>A Catalyst for AI Education</h2>
                    <p>PANIC! was a highlight of the Australian Cybernetic Exhibition, attracting thousands of visitors and gaining media attention. It is now a core component of the ANU School of Cybernetics' AI workshops, fostering critical thinking and active engagement with generative AI among executives and other professionals.</p>
                </div>
                <div className='figure'>
                    <img src={process.env.PUBLIC_URL + "/assets/panic-poster.jpg"} alt="A synthewave-style diagram showing the cyclical nature of the ai inputs."></img>
                    <div className='caption'>
                        Poster designed by Ken Wheeler for the exhibition.
                    </div>
                </div>            
                </div>
                {/* <div className='full-banner' style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/sonic-end.png"})`,
                backgroundSize: 'cover',
                backgroundPosition: "center",
                }}
                    title="The production crew that worked on the Sonic Mutation performance standing on the live stage.">
                </div> */}
                <ProjectNav index={1}></ProjectNav>
        </div>
    )
}