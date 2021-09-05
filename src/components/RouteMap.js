import { useState, useEffect } from 'react';
import ReactMapGL, {Source, Layer}  from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Papa from 'papaparse';
import runningRoutes from '../assets/running_routes.csv';

export const RouteMap = ({currentRoute}) => {
    const [viewport, setViewport] = useState({
        width: 880,
        height: 880,
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
        <div className="w-1/2 px-10">
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
                'line-color': 'rgba(6, 95, 70, 0.7)',
                'line-width': 8,
            }}
        />
    </Source>
        </ReactMapGL>
        </div>
    );
}

