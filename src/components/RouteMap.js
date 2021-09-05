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

    const parksLocations = [
        [51.26306890113637, 6.839010090204545],
[51.25942678103445, 6.7273173124999985],
[51.232769847266894, 6.764401211286173],
[51.22962795821595, 6.780461021924881],
[51.219106066666676, 6.802814523333335],
[51.22658903664924, 6.766931692251311],
[51.236351102631595, 6.834096802368424],
[51.21745149444444, 6.773719428981479],
[51.24248752736838, 6.767720694421053],
[51.15848714054055, 6.868630061711708],
[51.24554322516129, 6.8270384636935475],
[51.185020902898565, 6.747244485217393],
[51.19990707465438, 6.805535068433189],
[51.19185053281251, 6.77323416453125],
[51.195502432352946, 6.892001314243701],
[51.24157183652172, 6.804916181565214]
    ]

    useEffect(() => {
       loadCSVData(currentRoute)
        if (currentRoute) {
            const index = parseInt(currentRoute)
            setViewport({...viewport,latitude: parksLocations[index][0], longitude: parksLocations[index][1]})
        }
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

