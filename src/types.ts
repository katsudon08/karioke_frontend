export interface Song {
    title: string;
    artist: string;
    rank: number;
    key: number;
    memo?: string;
}

export interface Tag {
    name: string;
    checked: boolean;
}

export interface PostData extends Song {
    tags: Tag[]
}