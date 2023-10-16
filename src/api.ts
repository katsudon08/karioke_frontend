import { cache } from "react"
import { Song, Tag } from "./types"

const url = "http://localhost:8000/song"

// ホーム画面の曲一覧取得
export const getHomeSongs = async () => {
    const res = await fetch(`${url}`, {
        cache: "no-store"
    })
    try {
        return res.json()
    }catch(err) {
        console.error(err)
        return []
    }
}

// TODO: 後でやる
export const getTagSongs = async (tag: string) => {
    const res: Promise<Song[]> = (await fetch(`${url}`, {
        cache: "no-store"
    })).json()
}

export const getTags = cache(async () => {
    const res = await fetch(`${url}/tag`, {
        cache: "no-store"
    })
    try {
        return res.json()
    }catch(err) {
        console.log(err)
        return []
    }
})