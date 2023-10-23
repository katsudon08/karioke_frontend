export interface Song {
    title: string;
    artist: string;
    rank: number;
    key: number;
    memo?: string;
}

export interface SongOnId extends Song {
    id: number;
}

export interface Tag {
    name: string;
    checked: boolean;
}

export interface PostData extends Song {
    tags: string[]
}

export const URL = "http://localhost:8000/song"