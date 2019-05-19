import React from 'react';


class Search extends React.Component {
    constructor(props) {
        super(props) 
            this.state = {
                input = '',
            }
        }
    }

    componentDidMount() {
        fetch('https://api.spotify.com/v1/search')
    }
.then(results =>{
    
})