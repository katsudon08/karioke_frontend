"use client"

import DetailComponent from "@/components/DetailComponent";
import { Song } from "@/types";
import { useEffect } from "react";

const page = () => {
    const title = localStorage.getItem("title")
    const artist = localStorage.getItem("artist")
    const rank = Number(localStorage.getItem("rank"))
    const key = Number(localStorage.getItem("key")) + 50
    const memo = localStorage.getItem("memo")

    const songData: Song = {
        title: title ?? "",
        artist: artist ?? "",
        rank: rank ?? 0,
        key: key ?? 50,
        memo: memo ?? ""
    }

    return (
        <div className=" h-full flex flex-col justify-center items-center text-center break-all py-6 px-6 ">
            <main aria-label="曲情報詳細ページ" className=" bg-white h-fit w-full max-w-lg shadow-lg rounded-lg overflow-y-scroll hidden-scrollbar ">
                <DetailComponent songData={songData}/>
            </main>
        </div>
    );
}

export default page;