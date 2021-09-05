import park from '../assets/park.jpg'

export const Header = () => {
    return (
        <div  className="h-40 flex bg-park justify-center items-center w-full" style={{backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className="bg-white p-4 rounded-2xl text-2xl">
                    Find your daily route
            </div>
        </div>
    )
}