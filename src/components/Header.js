import React, { Component } from 'react';
// import { Button } from 'reactstrap';
//  import { Link } from 'react-router-dom'
import '../css/header.css'

class Header extends Component {
    render() {


        return (
            <div className='parent'>
                {/* <Link to='/'>Home</Link>
           <Link to='/login'>Connect to Spotify</Link>
           <Link to='/search'>Search</Link>
           <Link to='/signup'>Signup</Link>  */}
                {/* <div className='background-img'>
           <a href='spotify.com'>Connect to Spotify</a>
           </div> */}

                <button className='btn'>
                    <img src="/assets/Spotify_Icon_RGB_Black.png" className='background-img' alt=""></img>
                    Connect With Spotify
                </button>

                {/* <Button outline color="success" size="lg" style={{float: 'right'}}>Connect to Spotify</Button>{' '} */}


            </div>
        )
    }

}

export default Header;