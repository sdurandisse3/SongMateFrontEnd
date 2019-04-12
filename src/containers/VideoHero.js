import React from 'react';
import Header from '../components/Header'
import VideoHeroContent from '../components/VideoHeroContent';




const VideoHero = () => {

        return (
       
            <div  style={{
                width: '1440px',
                height: '500px',
                overflow: 'hidden',
                
              }}>

              <Header/> 
              <VideoHeroContent/>
          <video className='video-cover'
                 
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