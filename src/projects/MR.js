import '../Project.css';
import ProjectNav from '../ProjectNav';
import ReactPlayer from 'react-player';


export default function MixedReality() {

    return (
        <div className='project'>
            <div className="project-header">
                <div className="project-header-content">
                    <h1>Mixed Reality Navigation</h1>
                    <p className="header-description">I rapidly prototyped novel approaches to navigating indoor spaces using mixed reality technology.</p>
                    <div className='header-col-parent'>
                        <div className="header-col">
                            <h2>Context</h2>
                            <p className="col">CMU Project</p>
                        </div>
                        <div className="header-col">
                            <h2>Roles</h2>
                            <p className="col">Creative Technologist</p>
                            <p className="col">Interaction Designer</p>
                            <p className="col">Unity Developer</p>
                        </div>
                    </div>
                </div>

                <div className="project-header-image">
                    <ReactPlayer
                        playsinline
                        url={`${process.env.PUBLIC_URL}/assets/videos/mr-stable.mp4`}
                        playing={true}
                        loop={true}
                        muted={true}
                        width="100%"
                        height="auto"
                        className={"content-video crop"}
                    />      
                </div>
            </div>
            <div className='project-content'>
                <div>
                    <h2>Integrating Unobtrusive Visual Landmarks</h2>
                    <p>Tasked with exploring how emerging technologies could enhance wayfinding in unfamiliar environments, I focused on subtle, non-intrusive methods that would allow users to remain engaged with their surroundings. I prototyped the use of subtle visual landmarks within a mixed reality environment, developing a Unity application for the Meta Quest 3 that tracked the user's hand movements. By creating a discreet visual indicator, I sought to test whether users would intuitively understand how to interact with it to access additional information at specific locations. All test participants noticed the indicator and readily approached it if interested, demonstrating the potential of this approach for informational landmarks in mixed reality.</p>
                </div>
                <div className='figure'>
                    <img src={process.env.PUBLIC_URL + "/assets/mr-states.png"} alt="The three input states for the prototype - a small circle for passive, a larger circle with a touch icon for active, and a larger circle with a x for exit."></img>
                    <div className='caption'>
                        The three interaction states, designed to minimize visual distraction while conveying essential modes of engagement. 
                    </div>
                </div>  
                <div>
                    <h2>Guiding Exploration through Sound</h2>
                    <p> In parallel, I explored the potential of sound, and developed a mobile web app that simulated binaural audio cues based on the user's orientation, determined by the phone's compass. By emitting pinging sounds and dynamically adjusting their perceived location as the user rotated, I was able to successfully guide participants through a space using sound alone. User feedback highlighted the importance of directional feedback, reinforcing the notion that clear audio cues can significantly improve navigation experiences.</p>
                </div>
                <div className='figure'>
                        <ReactPlayer
                            playsinline
                            url={`${process.env.PUBLIC_URL}/assets/videos/headphones.mp4`}
                            playing={true}
                            loop={true}
                            muted={true}
                            width="100%"
                            height="auto"
                            className={"content-video"}
                        />
                    <div className='caption'>
                        I simulated the direction of audio by using the compass inside the phone, and found users naturally walk towards the sound.
                    </div>
                </div>                    
            </div>      
            <ProjectNav index={2}></ProjectNav>
        </div>
    )
}