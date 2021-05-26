import data from "../../assets/data.json";
import StartupWidget from "./StartupWidget";
import startupsInformation1 from "../../assets/images/startupsInformation1.png";
import startupsInformation2 from "../../assets/images/startupsInformation2.png";
import startupsInformation3 from "../../assets/images/startupsInformation3.png";

const Incubator = () => {
  const startups = data.startups;
  return (
    <div>
      <header id="incubatorHeader">
        <div className="incubatorHeaderContent">
          <h2>Invest directly into minority innovations.</h2>
          <button>View Startups</button>
        </div>
      </header>
      <main id="incubatorMain">
        <div id="featuredStartups">
          <div className="startupsTag">
            <div>
              <h3>Featured Startups</h3>
              <p>Invest in the next billion dollar company today</p>
            </div>
          </div>
          {Object.entries(startups).map(([startupId, startup]) => {
            return (
              <div className="startupWidgetDiv" key={`startup-${startupId}`}>
                <StartupWidget startupId={startupId} startup={startup} />
              </div>
            );
          })}
        </div>
        <div id="startupInformation">
          <img src={startupsInformation1} alt={startupsInformation1} />
          <img src={startupsInformation2} alt={startupsInformation2} />
          <img src={startupsInformation3} alt={startupsInformation3} />
        </div>
        <div id="upcomingStartups">
          <div className="startupsTag">
            <h3>Upcoming Startups</h3>
            <p>
              These visionary companies and disruptors are on their journey to
              change the world.
            </p>
          </div>
          {Object.entries(startups).map(([startupId, startup]) => {
            return (
              <div className="startupWidgetDiv" key={`startup-${startupId}`}>
                <StartupWidget startupId={startupId} startup={startup} />
              </div>
            );
          })}
        </div>
        <button className="loadMoreButton">Load more</button>
      </main>
    </div>
  );
};

export default Incubator;
