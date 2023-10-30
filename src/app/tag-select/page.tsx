"use client"

import TagSelectComponent from "@/components/TagSelectComponent";
import { TagOnId } from "@/types";
import { useEffect, useState } from "react";

const getTags = async () => {
    const response = await import("@/app/api/tagOnIds/route")

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

    return (
        <div className=" h-full w-full flex justify-center ">
            <main aria-label="タグ選択ページ" className=" bg-white w-full h-full px-4 max-w-3xl shadow-xl flex flex-col overflow-y-scroll hidden-scrollbar ">
                <TagSelectComponent tags={tags} />
            </main>
        </div>
    );
}

export default Page;