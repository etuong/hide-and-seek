import React, { useState } from "react";
import TeamSelector from "./TeamSelector";
import ImageUploader from "./ImageUploader";

const App: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const handleTeamSelect = (team: string) => {
    setSelectedTeam(team);
  };

  return (
    <div className="App">
      <h1>Team Picture Uploader</h1>
      <TeamSelector onTeamSelect={handleTeamSelect} />
      {selectedTeam && <ImageUploader team={selectedTeam} />}
    </div>
  );
};

export default App;
