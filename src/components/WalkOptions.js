import { ParkDescription } from './ParkDescription';

export const WalkOptions = ({setCurrentRoute, currentRoute}) => {
    const possibleRoutes = [...Array(16).keys()]

    const parkNames = [
        'Aaper Wald',
        'Flughafenrunde',
        'Große Brueckenrunde',
        'Hofgarten',
        'IHZ-Park',
        'Kleine Brueckenrunde',
        'Ostparkrunde',
        'Park am Staendehaus',
        'Rheinparkrunde',
        'Schlosspark Benrath',
        'Sportmeile Grafenberg',
        'Südbruecke',
        'Südparkrunde',
        'Ulenbergpark',
        'Unterbacher See',
        'Zoopark'
    ]

    return (
        <div className="flex flex-col w-1/2 px-10">
            {possibleRoutes.map((e) => (
                <>
                <button className="bg-green-50 mb-2 mx-2 p-2 hover:bg-green-800 hover:text-white rounded-xl" key={e} onClick={() => setCurrentRoute(e.toString())}>
                    {parkNames[e]}
                </button>
            {(e.toString() === currentRoute) && <ParkDescription index={e}/>}
                </>
            ))}
        </div>
    )
}