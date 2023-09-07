import React from 'react';
import './_team.scss';

import data from '../../utils/data/data'
import TeamItem from '../../components/TeamItem/TeamItem';

const Team = () => {
    return (
        <>
            <div className="team">
                <div className="team__wrapper">
                    {data?.team.map((teamMember, index) => (
                        <TeamItem key={index} name={teamMember.name} image={teamMember.image} text={teamMember.text} position={teamMember.position} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Team