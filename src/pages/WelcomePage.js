import { Navbar } from "../components/Navbar";
import { Articles } from "../components/Articles";


export const WelcomePage = () => {
    return (
        <div className="App">
            <Navbar />
            <header id="header" className="App-header">
                <h1>
                    Find your daily route
                </h1>

            </header>

            <form>
                <input type="text" placeholder="Where do you live?"></input>
            </form>

            <p>Top 4 Parks in Düsseldorf</p>

            <div></div>
            <div></div>
            <div></div>
            <div></div>

            <Articles />


            <footer>
                <p>I am footer</p>
            </footer>
        </div>
    );
}

