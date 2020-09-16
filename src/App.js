import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import {NavItem} from "./NavItem";
import {Home} from "./pages/Home";
import {createClient} from 'contentful';
import {Footer} from "./Footer";
import {Fotogalerij} from './pages/Fotogalerij';
import {Fotogalerij2} from './pages/Fotogalerij2';
import {AboutUs} from './pages/AboutUs';



import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import ReactCountryFlag from "react-country-flag";


export const client = createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: 'q8xxvl5loc88',
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: '5b0e53928c30ef395706e76a9e722baddab2dc1a9b863806956844d5f7c1e851'
});

const SharedLanguageContext = React.createContext();

export class App extends Component {


    state = {
        fotogalerij: "fotógaléria",
        aboutus:"rólunk",
        huis: "Vendégház",
        text1: "Zánkán, a Balaton egyik  legszebb részén nyugodt, csendes utcában vendégházunk kiadó.\nA két szintes nyaraló ideális családok és baráti társaságok, kerékpárosok pihenésére.\nAz ingatlantól 800 méterre található Zánka község strandja, a vasútállomás, buszmegálló. \nÉttermek, boltok, orvosi rendelő 20 perc sétával érhető el.\nA kert alatti Balaton és a parti sétány könnyen megközelíthető.",
        text2: "Az épület alsó részén két szoba, fürdőszoba, előszoba, konyha és egy bárterasz található, felső részén egybenyitott nagyobb szoba, gyereksarok, teakonyha, fürdőszoba és egy kis terasz van kialakítva.\nIngyenes WIFI hálózat, kábeltévé van.\nFérőhelyünk 7 fő, pótágyazható.\nMindkét teraszunk  Balatonra néz.\nAz udvarban belső parkoló, sátorozási, főzési, grillezési lehetőség adott.\nVendégházunk állatbarát, és akár egy éjszakára is kivehető.",
        text3: "A napi díj a teljes ingatlanra 35.000 Ft, alsó rész: 20.000 Ft felső rész: 15.000 Ft",
        overig0: "Felszerelés:\n",
        overig1: " WIFI\n",
        overig2: " TV+Kábeltévé\n",
        overig3: " Zuhanyzó\n",
        overig4: " Kávéfőző\n",
        overig5: " Vízforraló\n",
        overig6: " Kenyérpirító\n",
        overig7: " Mikrosütő\n",
        overig8: " Bárterasz/Panorámás-terasz\n",
        overig9: " Kandalló\n",
        overig10: " Mobilklíma\n",
        overig11: " Hűtő+Mélyhűtő\n",
        overig12: " Gáztűzhely\n",
        overig13: " Villanyrezsó\n",
        overig14: " Állat hozható"

    };

    onClickButtonuk = () => {
        this.setState({
            huis: "Guesthouse",
            aboutus:"about us",
            fotogalerij: "photo gallery\n",
            text1: "We offer to rent our place in one of the most beautiful place of lake Balaton, a friendly little village, Zánka.\n\n\nOur two story house is perfect either for families, byciclers or group of friends.\nYou can find the village beach, train station, bus stop 800 meters from us.\nRestaurants, grocery stores, doctors office are 20 minutes walking distance.\nIt is easy to reach the Balaton and the walking path along the shore.",
            text2: "On the first floor of the building there are two bedrooms, a bathroom, hall, kitchen and a bar terrace, on the second floor there is a bigger room, children’s corner, small kitchen, bathroom and a small terrace. Both our terraces are facing the lake.\nThere is free WiFi network, and cable TV.\nAnimals are also allowed.",
            text3: "The daily fee for the entire property is 35.000 ft, ground floor: 20.000 ft, upper floor: 15.000 ft",
            overig0: "Facilities:\n",
            overig1: "  WIFI\n",
            overig2: "  TV + Cable television\n",
            overig3: "  Shower\n",
            overig4: "  Coffee machine\n",
            overig5: "  Water boiler\n",
            overig6: "  Toaster\n",
            overig7: "  Microwave\n",
            overig8: "  Terrace with a panorama view\n",
            overig9: "  Wood stove\n",
            overig10: "  Airconditioning\n",
            overig11: "  Fridge + Freezer\n",
            overig12: "  Stove\n",
            overig13: "  Pets allowed\n",
            overig14: "\n"
        });
    };




    onClickButtonhu = () => {
        this.setState({
            fotogalerij: "fotógaléria",
            aboutus:"rólunk",
            huis: "Vendégház",
            text1: "Zánkán, a Balaton egyik  legszebb részén nyugodt, csendes utcában vendégházunk kiadó.\nA két szintes nyaraló ideális családok és baráti társaságok, kerékpárosok pihenésére.\nAz ingatlantól 800 méterre található Zánka község strandja, a vasútállomás, buszmegálló. \nÉttermek, boltok, orvosi rendelő 20 perc sétával érhető el.\nA kert alatti Balaton és a parti sétány könnyen megközelíthető.",
            text2: "Az épület alsó részén két szoba, fürdőszoba, előszoba, konyha és egy bárterasz található, felső részén egybenyitott nagyobb szoba, gyereksarok, teakonyha, fürdőszoba és egy kis terasz van kialakítva.\nIngyenes WIFI hálózat, kábeltévé van.\nFérőhelyünk 7 fő, pótágyazható.\nMindkét teraszunk  Balatonra néz.\nAz udvarban belső parkoló, sátorozási, főzési, grillezési lehetőség adott.\nVendégházunk állatbarát, és akár egy éjszakára is kivehető.",
            text3: "A napi díj a teljes ingatlanra 35.000 Ft, alsó rész: 20.000 Ft felső rész: 15.000 Ft",
            overig0: "Felszerelés:\n",
            overig1: " WIFI\n",
            overig2: " TV+Kábeltévé\n",
            overig3: " Zuhanyzó\n",
            overig4: " Kávéfőző\n",
            overig5: " Vízforraló\n",
            overig6: " Kenyérpirító\n",
            overig7: " Mikrosütő\n",
            overig8: " Bárterasz/Panorámás-terasz\n",
            overig9: " Kandalló\n",
            overig10: " Mobilklíma\n",
            overig11: " Hűtő+Mélyhűtő\n",
            overig12: " Gáztűzhely\n",
            overig13: " Villanyrezsó\n",
            overig14: " Állat hozható"


        });
    };


    render() {
        return (
            <SharedLanguageContext.Provider value={this.state}> {this.props.children}

                <Router>

                    <div className="App">

                        <div className="App-header">
                            <div className="container">
                                <img className="App-logo" src="./img/galer/logo9.png" alt="logo"/>
                                <h2>Salamander {this.state.huis}
                                </h2>
                                <nav>
                                    <NavItem title="home" to="/" exact={true}/>
                                    <NavItem title={this.state.fotogalerij} to="/fotogalerij"/>
                                </nav>


                                <div className="flags">
                                    <AwesomeButton onPress={this.onClickButtonhu}> <ReactCountryFlag
                                        styleProps={{
                                            width: '20px',
                                            height: '14px'
                                        }}
                                        code="hu"
                                        svg
                                    /></AwesomeButton>
                                    <AwesomeButton onPress={this.onClickButtonuk}> <ReactCountryFlag
                                        styleProps={{
                                            width: '20px',
                                            height: '14px'
                                        }}
                                        code="gb"
                                        svg
                                    />
                                    </AwesomeButton>
                                </div>
                            </div>

                        </div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/fotogalerij" component={Fotogalerij}/>
                        <Route exact path="/fotogalerij2" component={Fotogalerij2}/>
                        <Route exact path="/aboutUs" component={AboutUs}/>



                    </div>

                </Router>
            </SharedLanguageContext.Provider>
        );
    }
}

export const SharedLanguageConsumer = SharedLanguageContext.Consumer;

export default App;
