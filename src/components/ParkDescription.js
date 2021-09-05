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

    return (
        <div className="bg-green-500 flex flex-col mb-2 mx-2 p-2 rounded-xl">
            <h1 className="text-xl"> Park details</h1>
            <div> Route time: </div>
            <div> Air quality index: {airPollution[index]} / 5 </div>
        </div>
    )
}