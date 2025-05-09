import React, { useState, useEffect, useRef } from "react";
import TeamSelection from "./components/TeamSelection";
import PlayerList from "./components/PlayerList";
import socket from "./socket";

const App = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const nameInputRef = useRef<HTMLInputElement>(null); // Ref for the input field
  const [players, setPlayers] = useState<
    { name: string; team: string; found: boolean }[]
  >([
    { name: "Alice", team: "A", found: false },
    { name: "Bob", team: "A", found: false },
    { name: "Charlie", team: "B", found: false },
    { name: "David", team: "B", found: false },
  ]);

  useEffect(() => {
    socket.on("message", (data) => {
      console.log("Message from backend:", data);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    socket.emit("message", "Hello from the frontend!");
  };

  const handleTeamSelect = (team: string) => {
    setSelectedTeam(team);
  };

  const markPlayerAsFound = (name: string) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.name === name ? { ...player, found: true } : player
      )
    );
  };

  const handleNameSubmit = () => {
    const name = nameInputRef.current?.value.trim(); 
    if (name) {
      setUserName(name);
    }
  };

  const filteredPlayers = players.filter(
    (player) => player.team === selectedTeam
  );

  return (
    <div>
      <h1>1.5 Gen Asians - IKEA Hide and Seek</h1>
      {!userName ? (
        <div>
          <h2>Enter your name:</h2>
          <input
            type="text"
            placeholder="Your name"
            ref={nameInputRef} 
          />
          <button onClick={handleNameSubmit}>Submit</button>
        </div>
      ) : !selectedTeam ? (
        <TeamSelection onSelectTeam={handleTeamSelect} />
      ) : (
        <div>
          <button onClick={sendMessage}>Send Message</button>
          <PlayerList
            players={filteredPlayers}
            onMarkFound={markPlayerAsFound}
          />
        </div>
      )}
    </div>
  );
};

export default App;
