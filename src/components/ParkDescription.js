export const ParkDescription = ({index}) => {
const airPollution = [
    3.91,
    4.01,
    4.03,
    4.01,
    3.92,
    4.05,
    3.87,
    4.1,
    4.0,
    4.0,
    3.86,
    4.09,
    4.09,
    4.15,
    3.97,
    3.84
]

    const routeTimes = [
        "31 minutes",
        "1 hour 23 minutes",
        "49 minutes",
        "18 minutes",
        "5 minutes",
        "24 minutes",
        "8 minutes",
        "9 minutes",
        "17 minutes",
        "23 minutes",
        "13 minutes",
        "1 hour 14 minutes",
        "23 minutes",
        "17 minutes",
        "34 minutes",
        "10 minutes"
    ]

    return (
        <div className="bg-green-500 flex flex-col mb-2 mx-2 p-2 rounded-xl">
            <h1 className="text-xl"> Park details</h1>
            <div> Route time: {routeTimes[index]}</div>
            <div> Air quality index: {airPollution[index]} / 5 </div>
        </div>
    )
}