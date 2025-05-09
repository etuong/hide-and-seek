class GameController {
  private players: Map<string, { name: string; status: string }> = new Map();

  startGame(): void {
    console.log("Game has started.");
  }

  endGame(): void {
    console.log("Game has ended.");
  }

  updatePlayerStatus(playerId: string, status: string): void {
    if (this.players.has(playerId)) {
      this.players.get(playerId)!.status = status;
      console.log(`Player ${playerId} status updated to ${status}.`);
    } else {
      console.log(`Player ${playerId} not found.`);
    }
  }

  addPlayer(playerId: string, name: string): void {
    this.players.set(playerId, { name, status: "active" });
    console.log(`Player ${name} added with ID ${playerId}.`);
  }

  removePlayer(playerId: string): void {
    if (this.players.delete(playerId)) {
      console.log(`Player with ID ${playerId} removed.`);
    } else {
      console.log(`Player with ID ${playerId} not found.`);
    }
  }
}

export default GameController;
