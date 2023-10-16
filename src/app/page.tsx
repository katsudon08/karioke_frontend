import { getHomeSongs } from "@/api";
import DisplayComponent from "@/components/DisplayComponent";
import { Song } from "@/types";
import { use } from "react";

const page = () => {
    // TODO:  apiで全ての曲情報を取得する

    const songs: Song[] = use(getHomeSongs())
    // const songs: Song[] = [
    //     {
    //         title: "title",
    //         artist: "artist",
    //         rank: 3,
    //         key: 8,
    //         memo: "pepepepepepepepe"
    //     },
    //     {
    //         title: "ベノム",
    //         artist: "あっアー",
    //         rank: 4,
    //         key: 20,
    //         memo: "どおしてだよぉぉぉぉ"
    //     }
    // ]

    return (
        <DisplayComponent songs={songs} />
    );
}

export default page;