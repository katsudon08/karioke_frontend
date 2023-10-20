"use client"

export const SetLocalStrageSong = (title: string | undefined, artist: string | undefined, rank: number, key: number | undefined, memo: string | undefined) => {
    localStorage.setItem("title", title ?? "")
    localStorage.setItem("artist", artist ?? "")
    localStorage.setItem("rank", String(rank))
    localStorage.setItem("key", String(key))
    localStorage.setItem("memo", memo ?? "")
}