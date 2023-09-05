import React from 'react';
import './_socialMedia.scss';
import SocialMediaItem from './SocialMediaItem/SocialMediaItem';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const SocialMedia = () => {
    return (
        <>
            <div className="socialMedia">
                <SocialMediaItem icon={<FacebookIcon fontSize='large' />} link={""} />
                <SocialMediaItem icon={<InstagramIcon fontSize='large' />} link={""} />
                <SocialMediaItem icon={<TelegramIcon fontSize='large' />} link={""} />
                <SocialMediaItem icon={<YouTubeIcon fontSize='large' />} link={""} />
                <SocialMediaItem icon={<WhatsAppIcon fontSize='large' />} link={""} />
            </div>
        </>
    )
}

export default SocialMedia