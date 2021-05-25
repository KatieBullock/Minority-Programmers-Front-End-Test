import { Link } from "react-router-dom";

const StartupWidget = ({ startupId, startup }) => {
  return (
    <div>
      <img src={startup.image} alt={startup.title} />
      <h3>{startup.title}</h3>
      <p>{startup.shortDescription}</p>
      <div>
        <h5>Funds Raised</h5>
        <small>
          {(startup.funds.raised / startup.funds.needed) * 100}% complete
        </small>
        <h4>
          ${startup.funds.raised.toLocaleString()}/$
          {startup.funds.needed.toLocaleString()}
        </h4>
      </div>
      <div>
        <button>Fund Startup</button>
        <Link to={`/startup/${startupId}`}>
          <button>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default StartupWidget;
