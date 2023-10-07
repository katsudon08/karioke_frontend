"use client"

import { useEffect, useState } from "react"
import { Song } from "./types"

export const GetLocalStrageSong = (): Song => {
    const [song, setSong] = useState<Song>({
        title: "",
        artist: "",
        rank: 0,
        key: 13,
        memo: ""
    })

    // やはり、マウント前にデータ取得を行うべきだった
    useEffect(() => {
        const title = localStorage.getItem("title") ?? ""
        const artist = localStorage.getItem("artist") ?? ""
        const rank = localStorage.getItem("rank") ?? ""
        const key = localStorage.getItem("key") ?? ""
        const memo = localStorage.getItem("memo") ?? ""

        setSong({
            title: title,
            artist: artist,
            rank: Number(rank),
            key: Number(key),
            memo: memo
        })
    }, [])

    return song
}

export const SetLocalStrageSong = (title: string | undefined, artist: string | undefined, rank: number, key: number | undefined, memo: string | undefined) => {
    localStorage.setItem("title", title ?? "")
    localStorage.setItem("artist", artist ?? "")
    localStorage.setItem("rank", String(rank))
    localStorage.setItem("key", String(key))
    localStorage.setItem("memo", memo ?? "")
}