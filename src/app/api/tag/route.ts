import { URL } from "@/types";

export async function POST(request: Request) {
    const body = await request.json()
    console.log(body)

    const response = await fetch(URL+"/tag", {
        method: "POST",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    if (!response.ok) {
        throw new Error("データの送信に失敗しました.")
    }

    const data = await response.json()

    return new Response(JSON.stringify(data))
}

export async function PUT(request: Request) {
    const body = await request.json()
    console.log(body)

    const put = {
        data: body
    }

    const response = await fetch(URL+"/tag", {
        method: "PUT",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(put)
    })

    if (!response.ok) {
        throw new Error("データの送信に失敗しました.")
    }

    const data = await response.json()
    console.log(data)

    return new Response(JSON.stringify(data))
}