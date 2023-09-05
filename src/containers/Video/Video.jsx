import React, { useState } from 'react'
import './_video.scss'

import repairementVideo from '../../assets/video/video-repair.mp4';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import Navbar from '../../components/Navbar/Navbar';

const Video = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = React.useRef();

    const handVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo);

        if (playVideo) {
            vidRef.current.pause();
        }
        else {
            vidRef.current.play();
        }
    }

    return (
        <>
            <div className="video">
                <Navbar />
                <div className="video__wrapper">
                    <div className="video__content">
                        <video
                            src={repairementVideo}
                            ref={vidRef}
                            type="video/mp4"
                            loop
                            controls={false}
                            muted
                        />

                        <div className="video-overlay ">
                            <div className="video-overlay__circle "
                                onClick={handVideo}
                            >
                                {playVideo
                                    ?
                                    <PlayArrowIcon fontSize='large' style={{ color: '#fff' }} />
                                    : <StopIcon fontSize='large' style={{ color: '#fff' }} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Video