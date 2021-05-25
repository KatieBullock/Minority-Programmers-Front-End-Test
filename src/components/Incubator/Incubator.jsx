import data from "../../assets/data.json";
import StartupWidget from "./StartupWidget";

const Incubator = () => {
  const startups = data.startups;
  return (
    <div>
      {Object.entries(startups).map(([startupId, startup]) => {
        return (
          <div key={`startup-${startupId}`}>
            <StartupWidget startupId={startupId} startup={startup} />
          </div>
        );
      })}
    </div>
  );
};

export default Incubator;
