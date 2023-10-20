import { cache } from "react"
import { Song, SongOnId, Tag } from "./types"

const url = "http://localhost:8000/song"

// ホーム画面の曲一覧取得
export const getHomeSongs = cache(async (): Promise<SongOnId[]> => {
    const res = await fetch(`${url}`, {
        cache: "no-store"
    })
    try {
        return res.json()
    } catch (err) {
        console.error(err)
        return []
    }
})

// TODO: 後でやる
export const getTagSongs = async (tag: string) => {
    const res: Promise<Song[]> = (await fetch(`${url}`, {
        cache: "no-store"
    })).json()
}

export const getTags = cache(async (): Promise<string[]> => {
    const res = await fetch(`${url}/tag`, {
        cache: "no-store"
    })
    try {
        return res.json()
    } catch (err) {
        console.log(err)
        return []
    }
})

export const createTag = cache(async (tagName: string) => {
    console.log("data: ", tagName)
    console.log("json: ", JSON.stringify(tagName))
    const data = {
        name: tagName
    }

    const res = await fetch(`${url}/tag`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    try {
        console.log(res.json())
    } catch(err) {
        console.log(err)
    }
})