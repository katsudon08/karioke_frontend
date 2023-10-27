"use client"

import DisplayComponent from "@/components/DisplayComponent";
import { SongOnId } from "@/types";
import { cache, use, useEffect, useState } from "react";

const getSongs = cache(async (tag: string) => {
    const response = await import("@/app/api/songs/route")

    const data = await (await response.GET(tag)).json()

    return data
})

const page = ({ params }: { params: { slug: string } }) => {
    const [songs, setSongs] = useState<SongOnId[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const fetchSongs = await getSongs(decodeURI(params.slug))
            setSongs(fetchSongs)
        }

        fetchData()
    }, [])

    return (
        <DisplayComponent songs={songs} slug={params.slug}/>
    );
}

export default page;