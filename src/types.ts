export interface Song {
    title: string
    artist: string
    rank: number
    key: number
    memo?: string
}

export interface SongOnId extends Song {
    id: number;
}

export interface Tag {
    name: string
    checked: boolean
}

export interface TagOnId {
    id: number
    name: string
}

export interface PostData extends Song {
    tags: string[]
}

export interface TagMap {
    id: number,
    songId: number,
    tagId: number
}

export const URL = "http://localhost:8000/song"
// export const URL = "https://karioke-backend.onrender.com/song"