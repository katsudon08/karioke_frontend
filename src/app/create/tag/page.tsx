"use client"

import TagComponent from "@/components/TagComponent";
import { TagOnId } from "@/types";
import { useEffect, useState } from "react";

const getTags = async () => {
    const response = await import("@/app/api/tags/route")

    await response.GET()
    const data = await (await response.GET()).json()

    return data
}

const Page = () => {
    const [tags, setTags] = useState<TagOnId[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const fetchTags = await getTags()
            setTags(fetchTags)
        }

        fetchData()
    }, [tags])
    const filterTags = [...tags].filter(tag => tag != null && tag.name !== "")
    const checkedTags = [...filterTags].map(tag => ({
        name: tag.name,
        checked: false
    }))

    return (
        <div className=" h-full flex flex-col justify-center items-center text-center break-all py-6 px-6 ">
            <main aria-label="曲情報作成ページ" className=" bg-white h-fit w-full max-w-lg shadow-lg rounded-lg overflow-y-scroll hidden-scrollbar ">
                <TagComponent isCreate={true} checkedTags={checkedTags} tagIds={[]}/>
            </main>
        </div>
    );
}

export default Page;