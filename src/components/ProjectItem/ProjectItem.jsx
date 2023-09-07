import React from 'react'
import './_projectItem.scss'

const ProjectItem = ({ projectName, projectImage, projectStyle, projectSquare }) => {
    return (
        <>
            <a href='' className="projectItem">
                <div className="projectItem__image">
                    <img src={projectImage} alt="projectImage" loading='lazy' />
                </div>
                <div className="projectItem__name">
                    <h2 className='projectItem__name__h2'>
                        {projectName}
                    </h2>
                </div>
                <div className="projectItem__style">
                    <span>{projectStyle}</span>
                </div>
                <div className="projectItem__square">
                    <span>{projectSquare}</span>
                </div>
            </a>
        </>
    )
}

export default ProjectItem