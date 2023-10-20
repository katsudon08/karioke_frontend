"use client"

import { Song } from "@/types"

export const GetLocalStrageSong = (): Song => {
    // やはり、マウント前にデータ取得を行うべきだった
    if (typeof window !== 'undefined') {
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
    } else {
        return {
            title: "",
            artist: "",
            rank: 0,
            key: 13,
            memo: ""
        }
    }
}