import '../Project.css';
import ProjectNav from '../ProjectNav';

export default function Ukulele() {
    return (
        <div className='project small'>
            <div className="project-header">
                <div className="project-header-content">
                    <h1>Ukulele Hero Controller</h1>
                    <p className="header-description">I made a bluetooth ukulele controller with a rechargeable battery and 3D printed body, allowing users to play Guitar Hero wirelessly.</p>
                    <div className='header-col-parent'>
                        <div className="header-col">
                            <h2>Context</h2>
                            <p className="col">CMU Project</p>
                        </div>
                        <div className="header-col">
                            <h2>Roles</h2>
                            <p className="col">Hardware Design</p>
                            <p className="col">CAD Design</p>
                        </div>
                    </div>
                </div>

                <div className="project-header-image">
                    <img className='header-main' src={process.env.PUBLIC_URL + "/assets/ukulele.jpg"} alt="A 3D printed black ukulele on a wooden table."></img>
                </div>
            </div>
            <ProjectNav index={8}></ProjectNav>
        </div>
    )
}