import { RouteMap } from '../components/RouteMap';
import { useState, useEffect } from 'react';
import {WalkOptions} from '../components/WalkOptions';
import Papa from 'papaparse';
import runningRoutes from '../assets/running_routes.csv';
import '../styles.css';


export const WelcomePage = () => {
    const [currentRoute, setCurrentRoute] = useState(null);

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <h1 className="Heading">
                        Find your daily route
                    </h1>
                    <p>Walking is healthy!</p>
                </div>
                <div>
                    Nice walks around
                </div>
                <RouteMap currentRoute={currentRoute}/>
                <WalkOptions setCurrentRoute={setCurrentRoute} />
            </header>
        </div>
    );
}

