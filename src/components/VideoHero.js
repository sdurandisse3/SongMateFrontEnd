import React from 'react';


const VideoHero = () => {

        return (
            <div style={{
                width: '1420px',
                height: '500px',
                overflow: 'hidden',
              }}>
                <video
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                  loop autoPlay
                  src="/assets/Cheering-Crowd.mp4"
                />
              </div>
        )
    }

export default VideoHero;