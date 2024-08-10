import '../Project.css';
import ProjectNav from '../ProjectNav';

import CustomPlayer from '../CustomPlayer';

export default function Fugu() {
    return (
        <div className='project'>
            <div className="project-header">
                <div className="project-header-content">
                    <h1>FuguUX</h1>
                    <p className="header-description">I led product development for a startup using AI to perform usability analysis, managing market research, iterative design, and prototype development, including extensive user testing with nearly 100 participants.</p>
                    <div className='header-col-parent'>
                        <div className="header-col">
                            <h2>Context</h2>
                            <p className="col">CMU Capstone Project</p>
                        </div>
                        <div className="header-col">
                            <h2>Roles</h2>
                            <p className="col">Product Manager</p>
                            <p className="col">Designer</p>
                            <p className="col">Researcher</p>
                        </div>
                    </div>
                </div>

                <div className="project-header-image">
                    <img className="header-main" src={process.env.PUBLIC_URL + "/assets/fuguHome.png"} alt="A screenshot of a dashboard interface for usability analysis"></img>
                </div>
            </div>

            <div className='project-content'>
                <div>
                    <h2>Why Usability Issues Go Unresolved</h2>
                    <p>FuguUX is an early startup founded by Computer Science Professors at Carnegie Mellon University, who recognized that the web is full of many usability issues that could be identified using automation. Our team’s capstone project was to understand why these issues remain unresolved and develop concepts that would most valuably incorporate the usability analysis algorithms Fugu was developing. As Product Manager, I led our research and design strategies while contributing to our concepts, wireframes, prototypes, interviews, and tests. I led our analysis of more than 40 interviews and 30 surveys with UX professionals, where we identified that teams struggled to efficiently understand, prioritize, and advocate for resolving usability issues. This finding informed the over 40 concepts and iterations we made and tested across more than 50 tests, leading to our final design suggestions.</p>
                </div>
                <div className='figure'>
                    <img src={process.env.PUBLIC_URL + "/assets/fuguResearchMethods.svg"} alt="The research process for this project, showing the stages of interviews and iteration."></img>
                    <div className='caption'>
                        A visualization of our design process.
                    </div>
                </div>                  
                <div>
                    <h2>Understanding the Real Context of Users</h2>
                    <p>In our early concept tests, we found that presenting a list of usability issues was not enough to address them – teams wanted to understand the reactions of their actual users before implementing a fix. We realized our solution needed to present more contextual information about the user’s experience due to the identified issue. This finding led us to incorporate live web metrics through integrations with tools like Google Analytics, allowing our users to see where website drop-offs occurred and which issues were most problematic. By capturing points of frustration and demographic breakdowns, our tool also helps designers understand the mental models of their users so they can begin addressing identified usability issues.</p>
                </div>
                <div className='figure'>
                    <img src={process.env.PUBLIC_URL + "/assets/flow.png"} alt="A sankey diagram of a website flow, showing where users are dropping off." style={{padding: "20px"}}></img>
                    <div className='caption'>
                        The flow overview, contextualizing usability issues with their real impact on users. 
                    </div>
                </div>       
                <div>
                    <h2>Finding Impactful Problems</h2>
                    <p>A website might have many issues, but not all of them can be fixed, with our survey indicating that 70% of UX professionals struggled with time restrictions. Our tool needed to help teams identify the most impactful problems so teams can target them within their limited time. To help find these issues, our tool calculates the impacts of problems on key business metrics and the effort to fix them. With these statistics, we saw in testing that users went from being overwhelmed with information to better understanding what usability problems they would target first. These design decisions empower stakeholders to focus on the most impactful issues, ensuring they spend their limited time on the areas that will make the most significant difference.</p>
                </div>
                <div className='figure content-video'>
                    <CustomPlayer
                        url={`${process.env.PUBLIC_URL}/assets/videos/fuguFlows.mp4#t=0.001`}
                        playsinline={false}
                        playing={false}
                        loop={false}
                        muted={false}
                        width="100%"
                        height="auto"
                        className={"content-video crop"}
                    />     
                    <div className='caption'>
                        Highlights of the features of that support finding impactful usability issues.
                    </div>
                </div>
                <div>
                    <h2>Backing Usability Improvements with Solid Data</h2>
                    <p>Our interviews found that usability improvements often compete with other business priorities, requiring UX teams to justify their work's value. Our research highlighted that Designers, rather than relying on anecdotal evidence, needed data on how these problems impacted business outcomes. From this finding, we began integrating different forms of predictive metrics and case studies that would help advocate for fixing particular usability issues. In testing these ideas, we found that users were excited by how this tool could align their work with broader business goals, providing quantifiable evidence to support their proposed solutions.</p>
                    <p>FuguUX has been incorporating our designs and insights to advance towards their first MVP, equipped with a solution that supports both the discovery and resolution of usability issues, grounded in the realities of UX professionals' day-to-day challenges.</p>
                </div>
                <div className='figure'>
                    <img src={process.env.PUBLIC_URL + "/assets/impact.jpeg"} alt="Metric boxes showing predicted impact of fixing a usability issue."></img>
                    <div className='caption'>
                        Predicted outcomes that support prioritization and advocating for making different usability fixes.  
                    </div>
                </div>        
                </div>

                <ProjectNav index={20}></ProjectNav>
        </div>
    )
}