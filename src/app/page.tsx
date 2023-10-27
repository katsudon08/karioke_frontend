"use client"

import DisplayComponent from "@/components/DisplayComponent";
import { SongOnId } from "@/types";
import { useEffect, useState } from "react";

const getSongs = async () => {
    const response = await import("@/app/api/songs/route")

    await response.GET(null)
    const data = await (await response.GET(null)).json()

    return data
}

const page = () => {
    const [songs, setSongs] = useState<SongOnId[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const fetchSongs = await getSongs()
            setSongs(fetchSongs)
        }

        fetchData()
    }, [])

    return (
        <DisplayComponent songs={songs} slug={""} />
    );
}

export default page;