import React from 'react';
import './Home.css';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import ReactCountryFlag from "react-country-flag";


export class Project extends React.Component {


    render() {


        return (
            <div className="Home">
                <div className="intro">
                    <div className="bg-white">
                        <div className="basistext">
                            <iframe
                                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D609524679662496%26id%3D348967912384842&show_text=true&width=552&appId=461314471158752&&stream=true&header=true&height=332"
                                width="552" height="332"   styleProps={{
                                border:'none',
                                overflow:'hidden',
                                scrolling:'no',
                                frameBorder:'0',
                                allowTransparency:'true',
                                allow:'encrypted-media'
                            }}></iframe>
                            <FacebookProvider appId="123456789">
                                <EmbeddedPost href="http://www.facebook.com" width="500" />
                            </FacebookProvider>                        </div>
                    </div>
                </div>
            </div>
        )
    }
}