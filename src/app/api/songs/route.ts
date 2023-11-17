import { URL } from "@/types";

export async function POST(request: Request) {
    const body = await request.json()
    console.log("テスト", body)
    console.log("テストの型", typeof(body))

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

    if (body != "") {
        const filterTags = ([...nonSpaceTags].filter(tag => tag.name === body))
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

export async function DELETE(request: Request) {
    const body = await request.json()
    console.log(body)

    if (body === "") {
        const response = await fetch(URL+"/home", {
            method: "DELETE",
            cache: "no-store"
        })

        if (!response.ok) {
            throw new Error("データの削除に失敗しました.")
        }

        const data = await response.text()

        return new Response(data)
    }

    const response = await fetch(URL+"/slug", {
        method: "DELETE",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            slug: body
        })
    })

    if (!response.ok) {
        throw new Error("データの削除に失敗しました.")
    }

    const data = await response.text()

    return new Response(data)
}