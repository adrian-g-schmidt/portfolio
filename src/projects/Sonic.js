import '../Project.css';
import ProjectNav from '../ProjectNav';
import ReactPlayer from 'react-player';
import CustomPlayer from '../CustomPlayer';

export default function Sonic() {

    return (
        <div className='project'>
            <div className="project-header">
                <div className="project-header-content">
                    <h1>Sonic Mutations</h1>
                    <p className="header-description">Sonic Mutations is a personalized AI instrument showcased by musicians Alexis Weaver and Salllvage at the Sydney Opera House. 
                    I researched and developed the AI models and built the UI to integrate this technology into live performances. </p>
                    <div className='header-col-parent'>
                        <div className="header-col">
                            <h2>Team</h2>
                            <p className="col">Kopi Su Studio</p>
                        </div>
                        <div className="header-col">
                            <h2>Roles</h2>
                            <p className="col">Creative Technologist</p>
                            <p className="col">AI Researcher</p>
                            <p className="col">Full Stack Developer</p>
                        </div>
                    </div>
                    <a href="https://stream.sydneyoperahouse.com/outlines/videos/sonic-mutations-a-generative-music-exploration-outlines-2023">
                        VIEW LIVESTREAM RECORDING
                    </a>
                </div>

                <div className="project-header-image">
                    <img className="header-main" src={process.env.PUBLIC_URL + "/assets/ipad-background.png"} alt="Gif of Sonic Mutations interface"></img>
                    <div className="sonic-overlay">
                        <div className='sonic-column'>
                            <img src={process.env.PUBLIC_URL + "/assets/sonic/left1.gif"} alt="Voice recording in the interface."></img>
                            <img src={process.env.PUBLIC_URL + "/assets/sonic/left2.gif"} alt="Choosing from pre-selected prompts in the interface."></img>
                            <img src={process.env.PUBLIC_URL + "/assets/sonic/left3.gif"} alt="Adjusting the level of noise in the interface."></img>
                            <img src={process.env.PUBLIC_URL + "/assets/sonic/left4.png"} style={{ width: "50%" }} alt="A generate button in the interface."></img>
                        </div>
                        <img src={process.env.PUBLIC_URL + "/assets/sonic/right.gif"} alt="A panel of clips generating in the interface."></img>
                    </div>
                </div>
            </div>
            <div className='full-banner' style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/sonic-end.png"})`,
                backgroundSize: 'cover',
                backgroundPosition: "center",
            }}
                title="The production crew that worked on the Sonic Mutation performance standing on the live stage.">
            </div>
            <div className='project-content'>
                <div>
                    <h2>Supporting creativity with generative AI</h2>
                    <p>Sonic Mutations was a project commissioned by the Sydney Opera House to explore how artists could use generative-AI in live performances. Researching the landscape of music generation, I sought models that would allow the musicians to explore. Riffusion, a diffusion-based image model that transforms spectrograms into audio, emerged as the optimal choice by testing multiple open-source options. By modifying the pipeline of Riffusion, we could, in real-time, combine input sounds, prompts, and degrees of transformation into new audio that the artists were excited to play with.
                    </p>
                </div>
                <div className='figure'>
                        <ReactPlayer
                            playsinline
                            url={`${process.env.PUBLIC_URL}/assets/videos/sonic-model.mp4`}
                            playing={true}
                            loop={true}
                            muted={true}
                            width="100%"
                            height="auto"
                            className={"content-video"}
                        />
                    <div className='caption'>
                        The process to take recorded input audio and generate new audio.
                    </div>
                </div>                               
                <div>
                    <h2>Crafting personalized models</h2>
                    <p>To truly support artists in their music production, we understood the tool needed to generate audio that aligned with each artist's style. Collaborating closely with the artists, we focused on transforming it into a personalized creative tool by finetuning the model using LoRA. We experimented with training the model on a diverse range of sounds, from their previous music and singing to recordings of Australian wildlife and rocks. This iterative and exploratory process resulted in bespoke models for each artist, allowing them to express their unique musical vision through a truly customized instrument.
                    </p>
                </div>
                <div className='figure content-video'>
                    <CustomPlayer
                        url={`${process.env.PUBLIC_URL}/assets/videos/voice-model.mp4#t=0.001`}
                        playsinline={false} // Change to true if you want inline playback
                        playing={false}
                        loop={false}
                        muted={false}
                        width="100%"
                        height="auto"
                        className={"content-video crop"}
                    />
                    <div className='caption'>
                        The "Skype" sound effect before and after being run through a model trained on clips of Alexis Weaver's voice harmonies. 
                    </div>
                </div>                <div>
                    <h2>From experimentation to live performance</h2>
                    <p>With many options for interaction, we explored ways the artists could incorporate generating music into live performances. After testing multiple iterations, the final interface enabled artists to upload or record audio, experiment with various prompts, save their preferred settings, generate multiple sounds in a row, and seamlessly integrate the generated audio into their performance software through batch downloading and live playback/looping features. We designed these approaches to make it as fast and intuitive as possible for the artists to incorporate the tool into their workflow.
                    <br></br> <br></br>
                        The resulting tool was used in performances at the Sydney Opera House “Outlines Festival”, and SXSW Sydney, and is <a href='https://www.koupmusic.com/'>now being developed further.</a></p>
                </div>
                <div className='figure content-video'>
                    <CustomPlayer
                        url={`${process.env.PUBLIC_URL}/assets/videos/sonic-clip.mp4#t=0.001`}
                        playsinline={false} // Change to true if you want inline playback
                        playing={false}
                        loop={false}
                        muted={false}
                        width="100%"
                        height="auto"
                        className={"content-video crop"}
                    />     
                    <div className='caption'>
                        Alexis Weaver using the tool trained on her voice in a performance at the Sydney Opera House.
                    </div>
                </div>
                </div> 
                <div className='full-banner' style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/sonic.png"})`,
                backgroundSize: 'cover',
                backgroundPosition: "center",
                }}
                    title="Two performers standing infront of a colorful stage ready to play music">
                </div>
                <ProjectNav index={0}></ProjectNav>
        </div>
    )
}