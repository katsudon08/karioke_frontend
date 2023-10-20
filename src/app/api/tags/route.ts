const url = "http://localhost:8000/song/"

export async function GET() {
    const response = await fetch(url, {
        cache: "no-store"
    })

    if (!response.ok) {
        throw new Error("データの取得に失敗しました.")
    }

    const data = await response.json()

    return new Response(data)
}