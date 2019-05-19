import React from 'react';
import '../css/videoherocontent.css'
import '../css/search.css';
import Input from '@material-ui/core/Input';




const VideoHeroContent = () => {
   

    
return (
    <div className='vid-hero-content'>
    <h1>SongMate</h1>
    <h4>Find Your SongMate</h4>
    <div className='hero-content'>
    <Input id="filled-full-width" placeholder="Enter Song"
      />
    </div>
    </div>

)
    }

export default VideoHeroContent;