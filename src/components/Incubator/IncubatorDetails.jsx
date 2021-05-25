import { useParams } from "react-router-dom";
import data from "../../assets/data.json";

const IncubatorDetails = () => {
  const { startupId } = useParams();

  const startup = data.startups[startupId];

  return (
    <div>
      <div>
        <img src={startup.image} alt={startup.title} />
        <h3>{startup.title}</h3>
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
        <button>Fund Startup</button>
      </div>
      <div>
        <h4>Founded {startup.founded}</h4>
        <div>
          <small>Website</small>
          <p>
            <a href={startup.website}>{startup.website}</a>
          </p>
        </div>
        <div>
          <small>Location</small>
          <p>{startup.location}</p>
        </div>
        <div>
          <small>Team Size</small>
          <p>{startup.teamSize}</p>
        </div>
        <div>
          <h4>Meet the Team</h4>
          {Object.entries(startup.teamMembers).map(([name, position]) => {
            return (
              <div key={`${startup.title}-${name}`}>
                <h5>{name}</h5>
                <p>{position}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h4>About {startup.title}</h4>
        <p>{startup.description}</p>
      </div>
      <div>
        <h4>Vision</h4>
        <p>{startup.vision}</p>
      </div>
    </div>
  );
};

export default IncubatorDetails;
