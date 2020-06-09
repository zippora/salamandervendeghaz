import React from 'react';
import './Home.css';
import {SharedLanguageConsumer} from "../App";





export class Home extends React.Component {


    render() {


        return (
            <div className="Home">
                <div className="intro">
                    <div className="bg-white">
                        <div className="basistext">

                        <p>
                            <SharedLanguageConsumer>
                                {(context) => context.text1}
                            </SharedLanguageConsumer>
                            <br/><br/>
                            <SharedLanguageConsumer>
                                {(context) => context.text2}
                            </SharedLanguageConsumer>
                            <br/><br/>
                            <SharedLanguageConsumer>
                            {(context) => context.text3}
                        </SharedLanguageConsumer>

                        </p>
                            <img className="footer-logo" src="./img/logo.png" alt="logo"/>



                        </div>
                        <div className="column">
                         <img src="img/galer/hatsokerti_piheno.jpg"/>

                        </div>


                        <div className="column2">
                            <h3>
                                <SharedLanguageConsumer>
                                    {(context) => context.overig0}
                                </SharedLanguageConsumer></h3>
                            <p>&#x02022;
                                <SharedLanguageConsumer>
                                    {(context) => context.overig1}
                                </SharedLanguageConsumer></p>
                            <p>&#x02022;
                                <SharedLanguageConsumer>
                                    {(context) => context.overig2}
                                </SharedLanguageConsumer></p>
                            <p>&#x02022;
                                <SharedLanguageConsumer>
                                    {(context) => context.overig3}
                                </SharedLanguageConsumer></p>
                            <p>&#x02022;
                                <SharedLanguageConsumer>
                                    {(context) => context.overig4}
                                </SharedLanguageConsumer></p>
                            <p>&#x02022;
                                <SharedLanguageConsumer>
                                    {(context) => context.overig5}
                                </SharedLanguageConsumer></p>
                            <p>&#x02022;
                                <SharedLanguageConsumer>
                                    {(context) => context.overig6}
                                </SharedLanguageConsumer></p>
                            <p>&#x02022;
                                <SharedLanguageConsumer>
                                    {(context) => context.overig7}
                                </SharedLanguageConsumer></p>
                            <p>&#x02022;
                                <SharedLanguageConsumer>
                                    {(context) => context.overig8}
                                </SharedLanguageConsumer></p>
                            <p>&#x02022;
                                <SharedLanguageConsumer>
                                    {(context) => context.overig9}
                                </SharedLanguageConsumer></p>
                            <p>&#x02022;
                                <SharedLanguageConsumer>
                                    {(context) => context.overig10}
                                </SharedLanguageConsumer></p>
                            <p>&#x02022;
                                <SharedLanguageConsumer>
                                    {(context) => context.overig11}
                                </SharedLanguageConsumer></p>
                            <p>&#x02022;
                                <SharedLanguageConsumer>
                                    {(context) => context.overig12}
                                </SharedLanguageConsumer></p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}