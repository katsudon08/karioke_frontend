"use client"

import DisplayComponent from "@/components/DisplayComponent";
import { SongOnId } from "@/types";
import { useEffect, useState } from "react";

const getSongs = async (tag: string) => {
    const response = await fetch("/api/songs", {
        method: "POST",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tag)
    })

    if (!response.ok) {
        throw new Error("データの取得に失敗しました.")
    }

    const data = await response.json()

    return data
}

const Page = ({ params }: { params: { slug: string } }) => {
    const [songs, setSongs] = useState<SongOnId[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const fetchSongs = await getSongs(decodeURI(params.slug))
            console.log("fetchsongs", fetchSongs)
            setSongs(fetchSongs)
        }

        fetchData()
    }, [songs])

    return (
        <DisplayComponent songs={songs} slug={params.slug}/>
    );
}

export default Page;