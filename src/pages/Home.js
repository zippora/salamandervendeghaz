import React from 'react';
import './Home.css';
import './Footer.css';

import Email from '@material-ui/icons/Email'
import Phone from '@material-ui/icons/Phone'
import House from '@material-ui/icons/Home'
import {SharedLanguageConsumer} from "../App";
import {Footer} from "../Footer";





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
                            <div className="footer">

                                <br/><br/>
                                <div className="contact">
                                    <br/><br/>
                                    <div className="coll" style={{fontSize: 16}}>Kapcsolat:</div>

                                    <br/><br/>
                                    <div className="coll"><House/>&nbsp;8251 Zánka, Vérkúti utca 104. </div>
                                    <div className="coll"><Phone/>&nbsp; +36202816210</div>
                                    <div className="coll"><Email/>&nbsp; salamandervendeghaz@gmail.com</div>
                                    <br/><br/>
                                </div>

                                <div className="contact">
                                    <br/><br/>
                                    <div className="coll" style={{fontSize: 15}}>Contact:</div>

                                    <br/><br/>
                                    <div className="coll"><Phone/>&nbsp; +36204193686</div>
                                    <div className="coll"><Email/>&nbsp; salamandervendeghaz@gmail.com</div>
                                    <br/><br/>
                                    <br/><br/>
                                </div>

                            </div>

                        </p>
                            <img className="footer-logo" src="./img/logo.png" alt="logo"/>





                        </div>
                        <div className="column">
                            <video className="video" src="./video/VID-20200609-WA0003.mp4" controls>
                            </video>

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