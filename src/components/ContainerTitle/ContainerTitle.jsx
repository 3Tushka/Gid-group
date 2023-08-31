import React from 'react';
import './_containerTitle.scss';

const ContainerTitle = ({ title }) => {
    return (
        <>
            <div className="containerTitle">
                <div className="containerTitle__title">
                    <span>{title}</span>
                </div>
                <div className="containerTitle__line" />
            </div>
        </>
    )
}

export default ContainerTitle