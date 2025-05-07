import React, { useState } from "react";

const teams = ["Team A", "Team B", "Team C", "Team D"];

const TeamSelector: React.FC<{ onTeamSelect: (team: string) => void }> = ({
  onTeamSelect,
}) => {
  const [selectedTeam, setSelectedTeam] = useState<string>("");

  const handleTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const team = event.target.value;
    setSelectedTeam(team);
    onTeamSelect(team);
  };

  return (
    <div>
      <label htmlFor="team-select">Choose a team:</label>
      <select id="team-select" value={selectedTeam} onChange={handleTeamChange}>
        <option value="">--Please choose an option--</option>
        {teams.map((team) => (
          <option key={team} value={team}>
            {team}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TeamSelector;
