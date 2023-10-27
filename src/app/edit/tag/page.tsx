"use client"

import TagComponent from "@/components/TagComponent";
import { GetLocalStrageId } from "@/lib/getStrageId";
import { TagMap, TagOnId } from "@/types";
import { cache, use, useEffect, useState } from "react";

const getTags = cache(async () => {
    const response = await import("@/app/api/tagOnIds/route")

    const cache = await (await response.GET()).json()
    const data = await (await response.GET()).json()
    console.log("tagsキャッシュ", cache)
    console.log("tagsデータ", data)

    return data
})

const getTagMaps = cache(async () => {
    const response = await import("@/app/api/tagmap/route")

    const cache = await (await response.GET()).json()
    const data = await (await response.GET()).json()
    console.log("tagmapsキャッシュ", cache)
    console.log("tagmapsデータ", data)

    return data
})

const page = () => {
    const [tagmaps, setTagmaps] = useState<TagMap[]>([])
    const [tagOnIds, setTagOnIds] = useState<TagOnId[]>([])

    // use()を使用すると、cacheに保存された値が使用されてしまうので、useEffectを使用
    useEffect(() => {
        const fetchData = async () => {
            const tagMapsData = await getTagMaps()
            const tagOnIdsData = await getTags()
            console.log("フェッチのやつ", tagMapsData)
            console.log("フェッチのやつ", tagOnIdsData)
            setTagmaps(tagMapsData)
            setTagOnIds(tagOnIdsData)
        }

        fetchData()
    }, [])

    console.log("フェッチ後", tagmaps)
    console.log("フェッチ後", tagOnIds)

    // const tagmaps: TagMap[] = use(getTagMaps())
    const filterTagMaps = [...tagmaps].filter(tagmap => tagmap.songId === GetLocalStrageId())
    console.log(filterTagMaps)
    const filterTagIds = [...filterTagMaps].map(tag => tag.tagId)
    console.log("filterTagIds", filterTagIds)

    // const tagOnIds: TagOnId[] = use(getTags())
    const filterTags = [...tagOnIds].filter(tag => tag.name != null && tag.name !== "")
    console.log("test", filterTags)
    const checkedTags = [...filterTags].map(tag => ({
        name: tag.name,
        checked: filterTagIds.includes(tag.id)
    }))

    console.log(checkedTags)

    const tagIds: number[] = [...filterTags].map(tag => tag.id)
    console.log("test", tagIds)

    return (
        <div className=" h-full flex flex-col justify-center items-center text-center break-all py-6 px-6 ">
            <main aria-label="曲情報編集ページ" className=" bg-white h-fit w-full max-w-lg shadow-lg rounded-lg overflow-y-scroll hidden-scrollbar ">
                <TagComponent isCreate={false} checkedTags={checkedTags} tagIds={tagIds}/>
            </main>
        </div>
    );
}

export default page;