import React from 'react';
import './Home.css';
import {SharedLanguageConsumer} from "../App";


export class AboutUs extends React.Component {


    render() {


        return (
            <div className="Home">
                <div className="intro">
                    <div className="bg-white">
                        <div className="basistext">
                            wij zijn Krisztina en Robbie en we hebben een huisje te huur
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}