import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import {NavItem} from "./NavItem";
import {Home} from "./pages/Home";
import {createClient} from 'contentful';
import {Footer} from "./Footer";
import {Fotogalerij} from './pages/Fotogalerij';
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
        huis: "Vendégház",
        text1: "Zánkán, a Balaton egyik  legszebb részén nyugodt, csendes utcában vendégházunk kiadó.\nA két szintes Nyaraló ideális családok és baráti társaságok, kerékpárosok pihenésére.\nAz ingatlantól 500 méterre található Zánka község strandja, a vasútállomás, buszmegálló. \nÉttermek, boltok, orvosi rendelő 10 perc sétával érhető el.\nA kert alatti Balaton és a parti sétány könnyen megközelíthető.",
        text2: "Az épület alsó részén két szoba, fürdőszoba, előszoba, konyha és egy bárterasz található, felső részén egybenyitott nagyobb szoba, gyereksarok, teakonyha, fürdőszoba és egy kis terasz van kialakítva.\nIngyenes WIFI hálózat, kábeltévé van.\nFérőhelyünk 7 fő, pótágyazható.\nMindkét teraszunk  Balatonra néz.\nAz udvarban belső parkoló, sátorozási, főzési, grillezési lehetőség adott.\nVendégházunk állatbarát, és akár egy éjszakára is kivehető.\nAz ingatban az alsò ès a felső rèsz kūlön is kivehető.",
        text3: "A napi díj a teljes ingatlanra 35.000 ft + idegenforgalmi adó 400 ft/fő (18 év felett)\nTel. 06202816210",
        overig1: "Azonnali visszaigazolás\n",
        overig2: "  Ingyenes WIFI\n",
        overig3: "  Ingyenes parkolás\n",
        overig4: "  Bababarát szálláshely\n",
        overig5: "  Zánkai Strand 300 m\n",
        overig6: "  Neked Főztem Zánka 300 m\n",
        overig7: "  Lídia Borház 400 m\n",
        overig8: "  Gyógynövény-völgy 1.7 km\n",
        overig9: "  Légkondícionálás\n",
        overig10: "  Kutya bevihető (3 000 Ft / éj)\n",
        overig11: "  3 szoba, 6 férőhely\n",
        overig12: "  Beszélt nyelvek: Magyar, Holland, Angol, Német"

    };

    onClickButtonuk = () => {
        this.setState({
            huis: "Guesthouse",
            fotogalerij: "photo gallery\n",
            text1: "We offer to rent our place in one of the most beautiful place of lake Balaton, a friendly little village, Zánka.\n\n\nOur two story house is perfect either for families, byciclers or group of friends.\nYou can find the village beach, train station, bus stop 500 meters from us.\nRestaurants, grocery stores, doctors office are 10 minutes walking distance.\nIt is easy to reach the Balaton and the walking path along the shore.",
            text2: "On the first floor of the building there are two bedrooms, a bathroom, hall, kitchen and a bar terrace, on the second floor there is a bigger room, children’s corner, small kitchen, bathroom and a small terrace. Both our terraces are facing the lake.\nThere is free WiFi network, and cable TV.\nAnimals are also allowed.",
            text3: "The daily fee for the entire property is 35.000 ft + city tax of 400 ft/person (18 years and older) Tel. 06202816210",
            overig1: "Instant confirmation:\n",
            overig2: "  Free WiFi\n",
            overig3: "  Free parking\n",
            overig4: "  Baby friendly\n",
            overig5: "  Zánka beach 300 m\n",
            overig6: "  Neked főztem Restaurant Zánka 300 m\n",
            overig7: "  Lídia Wine House 400 m\n",
            overig8: "  Valley of Herbs 1.7 km\n",
            overig9: "  Air conditioning\n",
            overig10: "  Dog allowed (3 000 Ft / night)\n",
            overig11: "  3 rooms, 6 people",
            overig12: "  spoken languages: Hungarian, Dutch, German, English"
        });
    };

    onClickButtonnl = () => {
        this.setState({
            huis: "Gasthuis",
            fotogalerij: "fotogalerij",
            text1: "Wij bieden ons huis te huur aan in een rustige, stille straat in Zánka, één van de mooiste delen van het Balatonmeer, een vriendelijke klein dorpje, Zánka.\n\n\nDit vakantiehuis met twee verdiepingen is ideaal voor gezinnen en groepen fietsers of vrienden.\nU vindt het stand van Zánka op 500 meter. Ook een treinstation en bushalte ligt op 500 meter.\nRestaurants, winkels en dokter op 10 minuten loopafstand.\nHet huis ligt aan het Balatonmeer en het wandelpad langs de oever.",
            text2: "Op de eerste verdieping zijn twee slaapkamers, een badkamer, hal, keuken en een bar-terras, op de tweede verdieping is een woonkamer, kinderspeelhoek, kleine keuken, badkamer en een klein balkon. Allebei de terassen kijken uit over het meer.\nEr is gratis wifi en kabel TV.\nHuisdieren zijn toegestaan.",
            text3: "De prijs per dag voor het gehele huis is 35.000 ft + toeristenbelasting á 400 ft/persoon (18 jaar en ouder) Tel. 06202816210",
            overig1: "Overige informatie:\n",
            overig2: "  Gratis WiFi\n",
            overig3: "  Gratis parkeren\n",
            overig4: "  Kindvriendelijk\n",
            overig5: "  Zánka Strand 300 m\n",
            overig6: "  Neked főztem Restaurant Zánka 300 m\n",
            overig7: "  Lídia Wijnhuis 400 m\n",
            overig8: "  Vallei van de Kruiden 1.7 km\n",
            overig9: "  Air conditioning\n",
            overig10: "  Hond toegestaan (3 000 Ft / nacht)\n",
            overig11: "  3 kamers, 6 personen",
            overig12: "  gesproken talen: Hongaars, Nederlands, Duits, Engels"
        });
    };

    onClickButtonde = () => {
        this.setState({
            huis: "Gästehaus",
            fotogalerij: "fotogalerie",
            text1: "Unser Gästehaus befindet sich in einer ruhigen Straße in Zánka, einem der schönsten Teile des Plattensees. Dieses zweistöckige Ferienhaus ist ideal für Familien und Gruppen von Freunden und Radfahrern. Die Unterkunft befindet sich 500 m vom Strand Zánka, einem Bahnhof und einer Bushaltestelle entfernt. Restaurants, Geschäfte und eine Arztpraxis erreichen Sie in 10 Minuten zu Fuß. Der Plattensee und die Strandpromenade sind bequem zu erreichen.",
            text2: "Der untere Teil des Gebäudes besteht aus zwei Räumen, einem Badezimmer, einem Flur, einer Küche und einer Bar-Terrasse, der obere Teil besteht aus einem größeren zusammenhängenden Raum, einer Kinderecke, einer Küchenzeile, einem Badezimmer und einer kleinen Terrasse. Kostenloses WIFI-Netzwerk, Kabel-TV. Unsere Kapazität beträgt 7 Personen, Zustellbett möglich. Beide Terrassen überblicken den Plattensee. Auf dem Hof ​​gibt es ein Parkhaus, Zelt-, Koch- und Grillmöglichkeiten. Unser Gästehaus ist tierfreundlich und kann über Nacht mitgenommen werden. Im Pendel können der untere und der obere Teil aus der Tasche entnommen werden.",
            text3: "Tägliche Gebühr für das gesamte Anwesen 35.000 ft + Kurtaxe 400 ft / Person (über 18) Tel. 06202816210",
            overig1: "Sofortige Bestätigung\n",
            overig2: "  Kostenloses WiFi\n",
            overig3: "  Kostenlose Parkplätze\n",
            overig4: "  kinderfreundlich\n",
            overig5: "  Zánka Strand 300 m\n",
            overig6: "  Neked főztem Restaurant Zánka 300 m\n",
            overig7: "  Lídia Weingut 400 m\n",
            overig8: "  Tal der Kräuter\n 1.7 km\n",
            overig9: "  Klimaanlage\n",
            overig10: "  Hund erlaubt (3 000 Ft / nacht)\n",
            overig11: "  3 zimmer, 6 menschen",
            overig12: "  gesprochene Sprachen: Ungarisch, Niederländisch, Deutsch, Englisch"
        });
    };


    onClickButtonhu = () => {
        this.setState({
            contact: "fotógaléria",
            huis: "Vendégház",
            text1: "Zánkán, a Balaton egyik  legszebb részén nyugodt, csendes utcában vendégházunk kiadó.\nA két szintes Nyaraló ideális családok és baráti társaságok, kerékpárosok pihenésére.\nAz ingatlantól 500 méterre található Zánka község strandja, a vasútállomás, buszmegálló. \nÉttermek, boltok, orvosi rendelő 10 perc sétával érhető el.\nA kert alatti Balaton és a parti sétány könnyen megközelíthető.",
            text2: "Az épület alsó részén két szoba, fürdőszoba, előszoba, konyha és egy bárterasz található, felső részén egybenyitott nagyobb szoba, gyereksarok, teakonyha, fürdőszoba és egy kis terasz van kialakítva.\nIngyenes WIFI hálózat, kábeltévé van.\nFérőhelyünk 7 fő, pótágyazható.\nMindkét teraszunk  Balatonra néz.\nAz udvarban belső parkoló, sátorozási, főzési, grillezési lehetőség adott.\nVendégházunk állatbarát, és akár egy éjszakára is kivehető.\nAz ingatban az alsò ès a felső rèsz kūlön is kivehető.",
            text3: "A napi díj a teljes ingatlanra 35.000 ft + idegenforgalmi adó 400 ft/fő (18 év felett)\nTel. 06202816210",
            overig1: "Azonnali visszaigazolás\n",
            overig2: '  Ingyenes WIFI\n',
            overig3: "  Ingyenes parkolás\n",
            overig4: "  Bababarát szálláshely\n",
            overig5: "  Zánkai Strand 300 m\n",
            overig6: "  Neked Főztem Zánka 300 m\n",
            overig7: "  Lídia Borház 400 m\n",
            overig8: "  Gyógynövény-völgy 1.7 km\n",
            overig9: "  Légkondícionálás\n",
            overig10: "  Kutya bevihető (3 000 Ft / éj)\n",
            overig11: "  3 szoba, 6 férőhely\n",
            overig12: "  Beszélt nyelvek: Magyar, Holland, Angol, Német"


        });
    };


    render() {
        return (
            <SharedLanguageContext.Provider value={this.state}> {this.props.children}

                <Router>

                    <div className="App">
                        <div className="App-header">
                            <div className="container">
                                <img className="logo" src="./img/logo8.png" alt="logo"/>
                                <h2>Salamander<br/> {this.state.huis}</h2>
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
                                    <AwesomeButton onPress={this.onClickButtonnl}> <ReactCountryFlag
                                        styleProps={{
                                            width: '20px',
                                            height: '14px'
                                        }}
                                        code="nl"
                                        svg
                                    />
                                    </AwesomeButton>
                                    <AwesomeButton onPress={this.onClickButtonde}> <ReactCountryFlag
                                        styleProps={{
                                            width: '20px',
                                            height: '14px'
                                        }}
                                        code="de"
                                        svg
                                    />
                                    </AwesomeButton>

                                </div>
                            </div>

                        </div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/fotogalerij" component={Fotogalerij}/>

                        <Footer/>

                    </div>

                </Router>
            </SharedLanguageContext.Provider>
        );
    }
}

export const SharedLanguageConsumer = SharedLanguageContext.Consumer;

export default App;
