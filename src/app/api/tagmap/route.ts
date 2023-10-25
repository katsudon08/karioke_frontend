import { URL } from "@/types";

export async function GET() {
    const response = await fetch(URL+"/tagmap", {
        cache: "no-store"
    })

    if (!response.ok) {
        throw new Error("データの送信に失敗しました.")
    }

    const data = await response.json()

    return new Response(JSON.stringify(data))
}