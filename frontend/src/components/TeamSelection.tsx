import React, { useState } from "react";

const TeamSelection: React.FC<{ onSelectTeam: (team: string) => void }> = ({
  onSelectTeam,
}) => {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  const handleTeamSelect = (team: string) => {
    setSelectedTeam(team);
    onSelectTeam(team);
  };

  return (
    <div>
      <h2>Select Your Team</h2>
      <button
        onClick={() => handleTeamSelect("A")}
        disabled={selectedTeam === "A"}
      >
        Team A
      </button>
      <button
        onClick={() => handleTeamSelect("B")}
        disabled={selectedTeam === "B"}
      >
        Team B
      </button>
      {selectedTeam && <p>You have selected: {selectedTeam}</p>}
    </div>
  );
};

export default TeamSelection;
