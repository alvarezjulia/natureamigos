import { Navbar } from "../components/Navbar";
import { Articles } from "../components/Articles";
import { RouteMap } from "../components/RouteMap";
import { useState } from "react";
import { WalkOptions } from "../components/WalkOptions";
import "../styles.css";
import { Header } from "../components/Header";
import pollutionMap from "../assets/airpollution.png";
import yogaImage from "../yoga-6128120_640.jpg";
import senior from "../senior.jpg";
import architecture from "../architecture.jpg";

export const WelcomePage = () => {
  const [currentRoute, setCurrentRoute] = useState(null);

  return (
    <div className="App">
      <header id="header" className="App-header">
        <Navbar />
      </header>
      <Header />

      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Where do you live?"
        ></input>
      </form>

      <p className="Parkintroduction">
        Take a look at the parks in Düsseldorf!
      </p>

      <div></div>
      <div></div>
      <div></div>
      <div></div>

      <div className="flex flex-row justify-center px-4 w-full" id="map">
        <RouteMap currentRoute={currentRoute} />
        <WalkOptions
          setCurrentRoute={setCurrentRoute}
          currentRoute={currentRoute}
        />
      </div>

      <div
        id="pollution"
        className="w-full flex justify-items-center items-center my-6 py-6 flex-col"
        style={{ backgroundColor: "#F8FBF6", height: "700px" }}
      >
        <h1 className="text-4xl m-2"> Air pollution map in Düsseldorf</h1>
        <img src={pollutionMap} alt="pollution map" width="800px" />
      </div>
      <Articles />
      <div className="BlogContainer">
        <div className="ArticleBackgroundWhite" id="news">
          <img src={yogaImage} alt="yoga" />
          <div className="ArticleTitle1"> Asana Yoga in the Park</div>
          <div className="ArticleText1">
            {" "}
            Every Thursday at 7 p.m. Lisa guides you through a Bikram Yoga
            session in this park for an hour. Skilful and personable, with a
            microphone and music. Meanwhile 100 yogis like to gather with their
            mats in this spacious area in the park which makes the experience
            even more impressive.
          </div>
          <div className="ReadMoreButton">
            <a href="">Read More</a>
          </div>
        </div>
        <div className="ArticleBackgroundGreen" id="news">
          <img src={senior} alt="senior" />
          <div className="ArticleTitle2"> Health Benefits of Walking</div>
          <div className="ArticleText2">
            {" "}
            To get the health benefits, try to walk for at least 30 minutes as
            briskly as you can on most days of the week.Physical activity built
            into a daily lifestyle plan is also one of the most effective ways
            to assist with weight loss and keep weight off once it’s lost.
          </div>
          <div className="Buttonwhite">
            <a href="">Read More</a>
          </div>
        </div>
        <div className="ArticleBackgroundWhite" id="news">
          <img src={architecture} alt="architecture" />
          <div className="ArticleTitle3">
            Why the air in Düsseldorf is getting cleaner
          </div>
          <div className="ArticleText3">
            {" "}
            For the first time, the limit values for nitrogen oxides were
            complied with at all measuring points in the Düsseldorf city area.
            What kind of consequences this has and why pandamy only plays a
            minor role.
          </div>
          <div className="ReadMoreButton">
            <a href="">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};
