import React from 'react'
import './_mainProjects.scss';

import data from '../../utils/data/data';
import ProjectItem from '../../components/ProjectItem/ProjectItem';

const MainProjects = () => {
    return (
        <>
            <div className="mainProjects">
                <div className="mainProjects__wrapper">
                    {data?.projects.map((project, index) => (
                        <ProjectItem key={index} projectImage={project.projectImage} projectName={project.projectName} projectStyle={project.projectStyle} projectSquare={project.projectSquare} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default MainProjects