import React from 'react';
import './_instagramBlogGallery.scss';

import ContainerTitle from '../../components/ContainerTitle/ContainerTitle.jsx';
import InstagramBlogItem from '../../components/InstagramBlogItem/InstagramBlogItem';

import data from '../../utils/data/data';

const InstagramBlogGallery = () => {
    return (
        <>
            <ContainerTitle title={"Instagram"} />
            <div className="gallery">
                <div className="gallery__wrapper">
                    <div className="gallery__content">
                        {data?.instagramBlog.map((blogItem, index) => (
                            <InstagramBlogItem key={index} image={blogItem.image} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstagramBlogGallery