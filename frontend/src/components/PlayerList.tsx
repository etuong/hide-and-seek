import React from "react";

interface Player {
  name: string;
  team: string;
  found: boolean;
}

interface PlayerListProps {
  players: Player[];
  onMarkFound: (name: string) => void;
}

const PlayerList: React.FC<PlayerListProps> = ({ players, onMarkFound }) => {
  return (
    <div>
      <h2>Player List</h2>
      <ul>
        {players.map((player) => (
          <li key={player.name}>
            <span
              style={{ textDecoration: player.found ? "line-through" : "none" }}
            >
              {player.name}
            </span>
            <button onClick={() => onMarkFound(player.name)}>
              {player.found ? "Found" : "Mark as Found"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
