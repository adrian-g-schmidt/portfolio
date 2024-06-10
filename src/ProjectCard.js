import {Link } from "react-router-dom";

export default function ProjectCard(props){
    return(
        <Link className='projectCard' to={"/projects"+props.link} >
            <img src={"assets/"+props.imageSrc} alt="alt" width= "100%" height="240px"/>
            <div className="tagParent">
                {props.tags.map((tag, index) => (
                    <div key={index} className="tag">
                    {tag}
                    </div>
                ))}
            </div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </Link>
    )
}