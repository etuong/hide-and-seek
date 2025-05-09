class Player {
  id: string;
  name: string;
  status: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.status = "active"; // default status
  }

  updateStatus(newStatus: string) {
    this.status = newStatus;
  }
}

export default Player;
