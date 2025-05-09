import React from "react";

interface FoundMarkerProps {
  playerName: string;
  isFound: boolean;
  onToggleFound: () => void;
}

const FoundMarker: React.FC<FoundMarkerProps> = ({
  playerName,
  isFound,
  onToggleFound,
}) => {
  return (
    <div>
      <label>
        <input type="checkbox" checked={isFound} onChange={onToggleFound} />
        {playerName}
      </label>
    </div>
  );
};

export default FoundMarker;
