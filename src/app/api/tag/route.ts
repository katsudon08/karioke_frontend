import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json()
    console.log(body)

    const response = await fetch("http://localhost:8000/song/tag", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({ body })
    })

    if (!response.ok) {
        throw new Error("サーバーへの送信に失敗しました.")
    }

    const data = await response.json()

    return Response.json(data)
}