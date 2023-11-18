"use client"

import TagComponent from "@/components/TagComponent";
import { useEffect, useState } from "react";

const getTags = async () => {
    const response = await fetch("/api/tags", {
        cache: "no-store"
    })

    if (!response.ok) {
        throw new Error("データの取得に失敗しました.")
    }

    const data = await response.json()

    return data
}

const Page = () => {
    const [tags, setTags] = useState<string[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const fetchTags = await getTags()
            setTags(fetchTags)
        }

        fetchData()
    }, [tags])
    console.log("tags", tags)
    console.log(typeof(tags))

    const checkedTags = [...tags].map(tag => ({
        name: tag,
        checked: false
    }))
    console.log("テスト", checkedTags)

    return (
        <div className=" h-full flex flex-col justify-center items-center text-center break-all py-6 px-6 ">
            <main aria-label="曲情報作成ページ" className=" bg-white h-fit w-full max-w-lg shadow-lg rounded-lg overflow-y-scroll hidden-scrollbar ">
                <TagComponent isCreate={true} checkedTags={checkedTags} tagIds={[]}/>
            </main>
        </div>
    );
}

export default Page;