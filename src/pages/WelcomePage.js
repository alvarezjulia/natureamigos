import { Navbar } from "../components/Navbar";
import { Articles } from "../components/Articles";
import { RouteMap } from '../components/RouteMap';
import { useState } from 'react';
import { WalkOptions } from '../components/WalkOptions';
import '../styles.css';
import { Header } from '../components/Header';


export const WelcomePage = () => {
    const [currentRoute, setCurrentRoute] = useState(null);

    return (
        <div className="App">
            <header id="header" className="App-header">
                <Navbar />
            </header>
            <Header/>
            <div>
                <h1 className="Heading">
                    Find your daily route
                </h1>
                <p>Walking is healthy!</p>
            </div>
            <div>
                Nice walks around
            </div>

            <form>
                <input type="text" placeholder="Where do you live?"></input>
            </form>

            <p>Take a look at the parks in Düsseldorf!</p>

            <div></div>
            <div></div>
            <div></div>
            <div></div>

            <div className="flex flex-row justify-center px-4 w-full">
                <RouteMap currentRoute={currentRoute} />
                <WalkOptions setCurrentRoute={setCurrentRoute} />
            </div>

            <Articles />


            <footer>
                <p>I am footer</p>
            </footer>
        </div>
    );
}

