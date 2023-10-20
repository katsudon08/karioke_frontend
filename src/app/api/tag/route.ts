import { NextRequest } from "next/server";

const url = "http://localhost:8000/song/"

export async function POST(request: NextRequest) {
    const body = await request.json()
    console.log(body)

    const response = await fetch(url+"tag", {
        method: "POST",
        cache: "no-store",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(body)
    })

    if (!response.ok) {
        throw new Error("サーバーへの送信に失敗しました.")
    }

    const data = await response.json()

    return new Response(JSON.stringify(data))
}