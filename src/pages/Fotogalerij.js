import React from 'react';
import 'react-awesome-slider/dist/styles.css';

import './Fotogalerij.css';
import AwesomeSlider from "react-awesome-slider";


export class Fotogalerij extends React.Component {






    render() {
        return (
            <section className="foto">

                <AwesomeSlider organicArrows={true}>
                    <div data-src="./img/galer/buiten.jpg"/>
                    <div data-src='./img/galer/elokerti_piheno.jpg'/>
                    <div data-src='./img/galer/emeleti_furdoszoba.jpg'/>
                    <div data-src='./img/galer/emeleti_furdoszoba1.jpg'/>
                    <div data-src='./img/galer/emeleti_furdoszoba2.jpg'/>
                    <div data-src='./img/galer/emeleti_gyereksarok.jpg'/>
                    <div data-src='./img/galer/emeleti_kiskonyha.jpg'/>
                    <div data-src='./img/galer/emeleti_kiskonyha1.jpg'/>

                    <div data-src='./img/galer/emeleti_panorama.jpg'/>
                    <div data-src='./img/galer/emeleti_szoba.jpg'/>
                    <div data-src='./img/galer/emeleti_szoba1.jpg'/>
                    <div data-src='./img/galer/emeleti_terasz.jpg'/>
                    <div data-src='./img/galer/foldszini_nagyszoba.jpg'/>
                    <div data-src='./img/galer/foldszini_nagyszoba1.jpg'/>
                    <div data-src='./img/galer/foldszini_nagyszoba2.jpg'/>

                    <div data-src='./img/galer/foldszinti_barterasz.jpg'/>
                    <div data-src='./img/galer/foldszinti_barterasz1.jpg'/>

                    <div data-src='./img/galer/foldszinti_eloter.jpg'/>
                    <div data-src='./img/galer/foldszinti_kisszoba.jpg'/>
                    <div data-src='./img/galer/foldszinti_kisszoba1.jpg'/>
                    <div data-src='./img/galer/foldszinti_kisszoba2.jpg'/>

                    <div data-src='./img/galer/foldszinti_konyha1.jpg'/>
                    <div data-src='./img/galer/foldzinti_furdoszoba.jpg'/>
                    <div data-src='./img/galer/foldzinti_furdoszoba1.jpg'/>
                    <div data-src='./img/galer/foldszinti_furdoszoba4.jpg'/>

                    <div data-src='./img/galer/hatsokerti_piheno.jpg'/>
                    <div data-src='./img/galer/salamander_vendeghaz.jpg'/>





                </AwesomeSlider>
                <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>



            </section>
        );

    }
}