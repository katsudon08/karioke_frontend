"use client"

import DisplayComponent from "@/components/DisplayComponent";
import { SongOnId } from "@/types";
import { useEffect, useState } from "react";

const getSongs = async () => {
    const response = await fetch("/api/songs", {
        method: "POST",
        cache: "no-store",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(null)
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error("データの取得に失敗しました.")
    }

    return data
}

const Page = () => {
    const [songs, setSongs] = useState<SongOnId[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const fetchSongs = await getSongs()
            setSongs(fetchSongs)
        }

        fetchData()
    }, [songs])

    return (
        <DisplayComponent songs={songs} slug={""} />
    );
}

export default Page;