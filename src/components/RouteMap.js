import { useState, useEffect } from 'react';
import ReactMapGL, {Source, Layer}  from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Papa from 'papaparse';
import runningRoutes from '../assets/running_routes.csv';

export const RouteMap = ({currentRoute}) => {
    const [viewport, setViewport] = useState({
        width: 800,
        height: 800,
        latitude: 51.2256,
        longitude:  6.78278,
        zoom: 12
    });
    const [coordinates, setCoordinates] = useState(null);

    const loadCSVData = () => {
        Papa.parse(runningRoutes, {
            download: true,
            header: true,
            complete: function (input) {
                const records = input.data;
                const walk = records.filter(e => e.route_no === currentRoute).map(e=> [e.longitude,e.latitude])
                setCoordinates(walk);
            }
        });
    }

    useEffect(() => {
       loadCSVData(currentRoute)
    }, [currentRoute]);

    const polylineGeoJSON = {
        "type": "Feature",
        "geometry": {
        "type": "LineString",
            "coordinates": coordinates
    },
        "properties": {
        "name": "Walking Routes"
    }
    }

    return (
        <ReactMapGL
            {...viewport}
            onViewportChange={nextViewport => setViewport(nextViewport)}
        >
    <Source id='polylineLayer' type='geojson' data={polylineGeoJSON}>
        <Layer
            id='route'
            type='line'
            source='route'
            layout={{
                'line-join': 'round',
                'line-cap': 'round',
            }}
            paint={{
                'line-color': 'rgba(3, 170, 238, 0.5)',
                'line-width': 8,
            }}
        />
    </Source>
        </ReactMapGL>
    );
}

