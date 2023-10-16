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

export const GetLocalStrageTag = () => {
    if (typeof window !== 'undefined') {
        const tagName = localStorage.getItem("tagName") ?? ""

        return tagName
    }else {
        return ""
    }
}

export const SetLocalStrageSong = (title: string | undefined, artist: string | undefined, rank: number, key: number | undefined, memo: string | undefined) => {
    localStorage.setItem("title", title ?? "")
    localStorage.setItem("artist", artist ?? "")
    localStorage.setItem("rank", String(rank))
    localStorage.setItem("key", String(key))
    localStorage.setItem("memo", memo ?? "")
}

export const SetLocalStrageTag = (name: string | undefined) => {
    localStorage.setItem("tagName", name ?? "")
}

export const CreateColorFlags = (colorFrags: boolean[], num: number) => {
    const newColorFlags = [...colorFrags].map((v: boolean, i: number) => (
        (i < num) ? true : false
    ))

    console.log(newColorFlags)
    return newColorFlags
}

// ホーム画面の曲一覧取得
export const getHomeSongs = async () => {

}

export const getTagSongs = async () => {

}