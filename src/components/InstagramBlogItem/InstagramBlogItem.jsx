import React from 'react';
import './_instagramBlogItem.scss';

const InstagramBlogItem = ({ image }) => {
    return (
        <div className='instagramBlogItem'>
            <div className="instagramBlogItem__image">
                <img src={image} alt="instaItem" />
            </div>
        </div>
    )
}

export default InstagramBlogItem