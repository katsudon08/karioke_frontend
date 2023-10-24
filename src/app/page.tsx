import DisplayComponent from "@/components/DisplayComponent";
import { SongOnId } from "@/types";
import { cache, use } from "react";

const getSongs = cache(async () => {
    const response = await import("@/app/api/songs/route")

    const data = await (await response.GET(null)).json()

    return data
})

const page = () => {
    const songs: SongOnId[] = use(getSongs())

    return (
        <DisplayComponent songs={songs} />
    );
}

export default page;