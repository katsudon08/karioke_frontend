import { URL } from "@/types";

export async function GET(tagName: string | null) {
    const songs = await fetch(URL, {
        cache: "no-store"
    })

    const tagOnIds = await fetch(URL+"/tagOnId", {
        cache: "no-store"
    })

    const songId = await fetch(URL+"/id", {
        cache: "no-store"
    })

    const tagMaps = await fetch(URL+"/tagmap", {
        cache: "no-store"
    })

    if (!songs.ok) {
        throw new Error("データの取得に失敗しました.")
    }

    if (!tagMaps.ok) {
        throw new Error("idの取得に失敗しました.")
    }

    if (!tagOnIds.ok) {
        throw new Error("idの取得に失敗しました.")
    }

    if (!songId.ok) {
        throw new Error("idの取得に失敗しました.")
    }

    const songData = await songs.json()
    const tagData = await tagOnIds.json()
    const nonSpaceTags = [...tagData].filter(tag => tag.name != null && tag.name !== "")

    console.log(nonSpaceTags)

    if (tagName !== null) {
        const filterTags = ([...nonSpaceTags].filter(tag => tag.name === tagName))
        if (filterTags.length === 0) {
            return new Response(JSON.stringify([]))
        }
        const filterTag = filterTags[0]
        console.log(filterTag)

        const tagmapData = await tagMaps.json()
        console.log(tagmapData)

        const filterTagMapData = [...tagmapData].filter(tag => tag.tagId === filterTag.id)
        console.log(filterTagMapData)

        const tagmapIds = [...filterTagMapData].map(tag => tag.songId)
        console.log(tagmapIds)

        const filterSongs = [...songData].filter(song => tagmapIds.includes(song.id))
        console.log(filterSongs)

        return new Response(JSON.stringify(filterSongs))
    }

    return new Response(JSON.stringify(songData))
}