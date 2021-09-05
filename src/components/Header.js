import logo from '../assets/logo.png'

export const Header = () => {
    return (
        <>
        <div className="absolute m-8">
            <img src={logo} alt="logo" width="300px" />
        </div>
        <div  className=" flex bg-park justify-center items-center w-screen" style={{backgroundRepeat: 'no-repeat', backgroundSize: '100vw', height: '425px'}}>
            <div className="Heading">
                    Find your daily route
            </div>
        </div>
        </>
    )
}