"use client"

import { useEffect, useState } from "react"
import { Song } from "./types"

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

export const SetLocalStrageSong = (title: string | undefined, artist: string | undefined, rank: number, key: number | undefined, memo: string | undefined) => {
    localStorage.setItem("title", title ?? "")
    localStorage.setItem("artist", artist ?? "")
    localStorage.setItem("rank", String(rank))
    localStorage.setItem("key", String(key))
    localStorage.setItem("memo", memo ?? "")
}

export const CreateColorFlags = (colorFrags: boolean[], num: number) => {
    const newColorFlags = [...colorFrags].map((v: boolean, i: number) => (
        (i < num) ? true : false
    ))

    console.log(newColorFlags)
    return newColorFlags
}