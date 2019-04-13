import React from 'react';
import '../css/videoherocontent.css'
import '../css/search.css'

const VideoHeroContent = () => {
return (
    <div className='vid-hero-content'>
    <h1>SongMate</h1>
    <h4>Music for EveryMood</h4>
    <div className='hero-content'>
    <input type='text' className='search-box'placeholder='Enter Mood'/>
    </div>
    </div>
)
}

export default VideoHeroContent;