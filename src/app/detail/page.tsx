"use client"

import { getLocalStrageSong } from "@/api";
import DetailComponent from "@/components/DetailComponent";
import { Song } from "@/types";
import { useEffect } from "react";

const page = () => {
    const song: Song = getLocalStrageSong()

    return (
        <div className=" h-full flex flex-col justify-center items-center text-center break-all py-6 px-6 ">
            <main aria-label="曲情報詳細ページ" className=" bg-white h-fit w-full max-w-lg shadow-lg rounded-lg overflow-y-scroll hidden-scrollbar ">
                <DetailComponent songData={song}/>
            </main>
        </div>
    );
}

export default page;