"use client"

import { Song } from "./types"

export const getLocalStrageSong = (): Song => {
    const title = localStorage.getItem("title") ?? ""
    const artist = localStorage.getItem("artist") ?? ""
    const rank = localStorage.getItem("rank") ?? ""
    const key = localStorage.getItem("key") ?? ""
    const memo = localStorage.getItem("memo") ?? ""

    const song: Song = {
        title: title,
        artist: artist,
        rank: Number(rank),
        key: Number(key),
        memo: memo
    }

    return song
}

export const setLocalStrageSong = (title: string | undefined, artist: string | undefined, rank: number, key: number | undefined, memo: string | undefined) => {
    localStorage.setItem("title", title ?? "")
    localStorage.setItem("artist", artist ?? "")
    localStorage.setItem("rank", String(rank))
    localStorage.setItem("key", String(key))
    localStorage.setItem("memo", memo ?? "")
}