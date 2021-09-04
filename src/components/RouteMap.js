import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, {Source, Layer}  from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

export const RouteMap = () => {
    const [viewport, setViewport] = useState({
        width: 800,
        height: 800,
        latitude: 51.2256,
        longitude:  6.78278,
        zoom: 12
    });

    const polylineGeoJSON = {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "'coordinates": [
                    [6.789270, 51.203125],
                    [6.810906, 51.228721],
                    [6.833195, 51.240817],
                    [6.846047, 51.263046]
                ]
            }
        }
    };

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

