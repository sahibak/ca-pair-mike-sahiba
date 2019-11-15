import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../style.scss'

export default class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <h1> Ultimate Tic Tac Toe </h1>
                <Link to="/best-game-ever"><button className="home-button" type="button" value="Let's Play!">Let's Play!</button></Link>
                <video width="320" height="240" autoPlay muted loop>
                    <source src="https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.mp4" type="video/mp4"></source>
                </video>
            </div>

        
        );
    }
}
