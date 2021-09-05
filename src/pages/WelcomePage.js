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
            <div className = "BlogContainer">
                <div className = "ArticleBackground1">
                    <div className = "ArticlePic1"/>
                    <div className = "ArticleTitle1"> Asana Yoga in the Park</div>
                    <div classNAme = "ArticleText1"> Every Thursday at 7 p.m. Lisa guides you through a Bikram Yoga session in this park for an hour. 
                    Skilful and personable, with a microphone and music. Meanwhile 100 yogis like to gather with their mats in this spacious area 
                    in the park which makes the experience even more impressive.</div>
                </div>
            </div>
            
            <footer>
                <p>I am footer</p>
            </footer>
        </div>
    );
}

