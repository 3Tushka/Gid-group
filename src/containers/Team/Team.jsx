import React, { useState } from 'react';
import './_team.scss';

import data from '../../utils/data/data'
import TeamItem from '../../components/TeamItem/TeamItem';

import { Button } from '@mui/material';

const Team = () => {

    const itemPerRow = 4;

    const [next, setNext] = useState(itemPerRow);

    const handleMoreItems = () => {
        setNext(next + itemPerRow)
    }

    return (
        <>
            <div className="team">
                <div className="team__wrapper">
                    {data?.team?.slice(0, next).map((teamMember, index) => (
                        <TeamItem key={index} name={teamMember.name} image={teamMember.image} text={teamMember.text} position={teamMember.position} />
                    ))}
                </div>
                <div className="team__moreButton">
                    {next < data?.team.length && (
                        <Button className="button" size='large' onClick={handleMoreItems}>
                            Ще співробітники
                        </Button>
                    )}
                </div>
            </div>
        </>
    )
}

export default Team