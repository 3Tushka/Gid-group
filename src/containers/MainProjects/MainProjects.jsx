import React, { useState } from 'react'
import './_mainProjects.scss';

import data from '../../utils/data/data';
import ProjectItem from '../../components/ProjectItem/ProjectItem';
import { Button } from '@mui/material';

const MainProjects = () => {

    const itemPerRow = 3;

    const [next, setNext] = useState(itemPerRow);

    const handleMoreItems = () => {
        setNext(next + itemPerRow)
    }

    return (
        <>
            <div className="mainProjects">
                <div className="mainProjects__wrapper">
                    {data?.projects?.slice(0, next).map((project, index) => (
                        <ProjectItem key={index} projectImage={project.projectImage} projectName={project.projectName} projectStyle={project.projectStyle} projectSquare={project.projectSquare} />
                    ))}
                </div>

                <div className="mainProjects__moreButton">
                    {next < data?.projects.length && (
                        <Button className="button" size='large' onClick={handleMoreItems}>
                            Більше
                        </Button>
                    )}
                </div>
            </div>
        </>
    )
}

export default MainProjects