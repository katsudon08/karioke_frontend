import { createTag, getHomeSongs } from "@/api";
import DisplayComponent from "@/components/DisplayComponent";
import { Song, SongOnId } from "@/types";
import { use } from "react";

const page = () => {
    // TODO:  apiで全ての曲情報を取得する

    const songs: SongOnId[] = use(getHomeSongs())

    return (
        <DisplayComponent songs={songs} />
    );
}

export default page;