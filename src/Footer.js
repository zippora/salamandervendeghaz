/**
 *
 */
import React from 'react';
import './Footer.css';

export class Footer extends React.Component {

    render() {
        return (

            <div className="credit">
            <img className="footer-logo" src="./img/logo.png" alt="logo"/>
            <br/><br/>

                <span className="webmaster">&copy; Design/development by Zippora Levering<br/><br/></span>

            </div>
        );
    }
}