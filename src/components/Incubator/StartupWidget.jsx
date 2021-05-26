import { Link } from "react-router-dom";
import loadingBar from "../../assets/images/loadingBar.png";
import mockLoadingBar from "../../assets/images/mockLoadingBar.png";

const StartupWidget = ({ startupId, startup }) => {
  return (
    <div id="startupWidget">
      <div className="startupWidgetName">
        <div>
          <img src={startup.image} alt={startup.title} />
        </div>
        <h3>{startup.title}</h3>
      </div>
      <p className="startupWidgetDesc">{startup.shortDescription}</p>
      <div className="startupWidgetFunds">
        <div>
          <h5>Funds Raised</h5>
          <small>
            {(startup.funds.raised / startup.funds.needed) * 100}% Complete
          </small>
        </div>
        <h4>
          ${startup.funds.raised.toLocaleString()}/$
          {startup.funds.needed.toLocaleString()}
        </h4>
      </div>
      <div className="startupWidgetButtons">
        <div>
          <button className="startupWidgetFundButton">Fund Startup</button>
        </div>
        <div>
          <Link to={`/startup/${startupId}`}>
            <button className="startupWidgetLearnButton">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartupWidget;
