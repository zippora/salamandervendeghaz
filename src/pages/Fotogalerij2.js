import React from 'react';
import ReactDOM from 'react-dom';

import 'react-awesome-slider/dist/styles.css';

import ImageGallery from 'react-image-gallery';
import './Fotogalerij2.css';

import "react-image-gallery/styles/css/image-gallery.css";

import { DateRangePicker } from 'react-date-range';


import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';

export class Fotogalerij2 extends React.Component {

    handleSelect(ranges) {

        console.log(ranges);
    }

    render() {

            const selectionRange = {



                startDate: new Date('10-16-2019'),
                endDate:  new Date('12-31-2019'),
                key: 'selection',
            }

        const images = [

            {
                original: './img/portfolio/IMG-20191008-WA0000.jpg',
                description: 'stoelen en wijn'
            },

            {
                original: './img/portfolio/IMG-20191008-WA0001.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0002.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0003.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0004.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0005.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0006.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0007.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0008.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0009.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0010.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0011.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0012.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0013.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0014.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0015.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0016.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0017.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0018.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0019.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0020.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0021.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0023.jpg',
                description: 'stoelen en wijn'
            },
            {
                original: './img/portfolio/IMG-20191008-WA0024.jpg',
                description: 'stoelen en wijn'
            },   {
                original: './img/portfolio/IMG-20191008-WA0025.jpg',
                description: 'stoelen en wijn'
            },   {
                original: './img/portfolio/IMG-20191008-WA0026.jpg',
                description: 'stoelen en wijn'
            },


        ];
        return (





    <section className="foto">
        <DateRangePicker
            ranges={[selectionRange]}
            onChange={this.handleSelect}
        />


                <ImageGallery items={images} showBullets='false' />


            </section>
        );

    }
}