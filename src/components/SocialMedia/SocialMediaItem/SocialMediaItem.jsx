import React from 'react'

const SocialMediaItem = ({ icon, link }) => {
    return (
        <div className="socialMedia__item">
            <a href={link} className='socialMedia__link'>
                <i className='socailMedia__icon'>
                    {icon}
                </i>
            </a>
        </div>
    )
}

export default SocialMediaItem