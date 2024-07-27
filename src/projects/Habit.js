import '../Project.css';
import ProjectNav from '../ProjectNav';
import ReactPlayer from 'react-player';

export default function Habit() {
    return (
        <div className='project small'>
            <div className="project-header">
                <div className="project-header-content">
                    <h1>Habit Helper</h1>
                    <p className="header-description">I rapidly prototyped a Next.js web app over a week to explore how language models can assist in building positive habits. The app incorporated GPT-3.5, micro-habit principles, and a built-in survey to gather user feedback. Throughout the week, I iteratively updated the app based on this feedback to optimize for usability and quality advice for habit formation.</p>
                    <div className='header-col-parent'>
                        <div className="header-col">
                            <h2>Context</h2>
                            <p className="col">CMU Project</p>
                        </div>
                        <div className="header-col">
                            <h2>Roles</h2>
                            <p className="col">Designer</p>
                            <p className="col">Next.js Developer</p>
                        </div>
                    </div>
                    <div className='cta-col'>
                        <a href="https://pax-habit-helper.fly.dev">
                            TRY IT HERE
                        </a>
                    </div>
                </div>

                <div className="project-header-image">
                    <ReactPlayer
                            playsinline
                            url={`${process.env.PUBLIC_URL}/assets/videos/rec.mp4`}
                            playing={true}
                            loop={true}
                            muted={true}
                            width="100%"
                            height="auto"
                            className={"content-video crop"}
                    />                    
                </div>
            </div>
            <ProjectNav index={3}></ProjectNav>
        </div>
    )
}