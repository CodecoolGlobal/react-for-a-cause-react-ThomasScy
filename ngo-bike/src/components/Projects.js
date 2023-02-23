import React, {useState} from "react";

export default function Projects() {

    const projects = [
        {
            id: 1,
            name: "Car Free Day",
            summary: "",
            text: "a",
            pic: "../public/pix/projects/carfree.jpg",
        },
        {
            id: 2,
            name: "AFRICROOZE",
            summary: "",
            text: "b",
            pic: "../public/pix/projects/africroozeBW.jpg",
        },
        {
            id: 3,
            name: "Self Help Groups",
            summary: "",
            text: "c",
            pic: "../public/pix/projects/africroozeBW.jpg",
        },
        {
            id: 4,
            name: "MOTIVATION MOBILITY",
            summary: "",
            text: "d",
            pic: "../public/pix/projects/africroozeBW.jpg",
        },
        {
            id: 5,
            name: "CYCLE TO SCHOOL",
            summary: "",
            text: "e",
            pic: "../public/pix/projects/africroozeBW.jpg",
        },
    ];

    const projetDivs = projects.map(project => {
        return (
            <div className={`project-container`}>
                <div className="project-pic" style={{ backgroundImage: `url(${project.pic})`}}>
                    <p>{project.name}</p>
                </div>
                <div className="project-text-container">
                    <div className="project-text">{project.summary}</div>
                    <div className="read-more" onClick={e => handleReadMoreClick(e.target)}>Read more</div>
                </div>
            </div>
        )
        });

    function handleReadMoreClick(project) {
        console.log(project.text);
    }


 return (
    <div className="projects">
        <h1>Projects!</h1>
        <div className="all-projects-container">
            {/* {projetDivs} */}
            <div className={`project-container`}>
                <div className="project-pic" style={{ backgroundImage: `url(${projects[0].pic})`}}>
                    <p>{projects[0].name}</p>
                </div>
                <div className="project-text-container">
                    <div className="project-text">{projects[0].summary}</div>
                    <div className="read-more" onClick={() => handleReadMoreClick(projects[0].id)}>Read more</div>
                </div>
            </div>
        </div>
    </div>
 )   
}