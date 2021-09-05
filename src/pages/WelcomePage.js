import { Navbar } from "../components/Navbar";
import { Articles } from "../components/Articles";
import { RouteMap } from '../components/RouteMap';
import { useState } from 'react';
import { WalkOptions } from '../components/WalkOptions';
import '../styles.css';


export const WelcomePage = () => {
    const [currentRoute, setCurrentRoute] = useState(null);

    return (
        <div className="App">
            <header id="header" className="App-header">
                <Navbar />
            </header>
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

            <p>Top 4 Parks in Düsseldorf</p>

            <div></div>
            <div></div>
            <div></div>
            <div></div>

            <RouteMap currentRoute={currentRoute} />
            <WalkOptions setCurrentRoute={setCurrentRoute} />

            <Articles />
            <button className="Button">Load more</button>

           


            <footer>
                <p>I am footer</p>
            </footer>
        </div>
    );
}

