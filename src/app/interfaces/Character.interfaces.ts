export interface CharacterResponse {
    info: CharacterInfo;
    results: Character[];
  }
export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: CharacterOrigin;
    location: CharacterLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
  export interface CharacterInfo {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  }
export interface CharacterOrigin {
        name: string;
        url: string;
}

export interface CharacterLocation {
    name: string;
    url: string;
}

