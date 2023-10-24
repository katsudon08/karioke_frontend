import { TagOnId, URL } from "@/types";

export async function GET() {
    const response = await fetch(URL+"/tagOnId", {
        cache: "no-store"
    })

    if (!response.ok) {
        throw new Error("データの取得に失敗しました.")
    }

    const data: TagOnId[] = await response.json()

    return new Response(JSON.stringify(data))
}