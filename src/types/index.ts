export interface Team {
    id: string;
    name: string;
}

export interface User {
    id: string;
    name: string;
    teamId: string;
    profilePictureUrl: string;
}