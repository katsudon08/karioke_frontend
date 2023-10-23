import { URL } from "@/types"

export async function GET() {
    const response = await fetch(URL+"/tag", {
        cache: "no-store"
    })

    if (!response.ok) {
        throw new Error("データの取得に失敗しました.")
    }

    const data = await response.json()

    return new Response(JSON.stringify(data))
}