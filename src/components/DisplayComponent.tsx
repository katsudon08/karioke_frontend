"use client"

import { SetLocalStrageId } from "@/lib/setStrageId";
import { SetLocalStrageSong } from "@/lib/setStrageSong";
import { SongOnId } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DisplayComponent = ({ songs, slug }: { songs: SongOnId[], slug: string }) => {
    const router = useRouter()

    const handleConfirm = async () => {
        const flag = confirm("このタグを削除しますか？")
        if (flag) {
            console.log("slug", slug)

            const response = await fetch("/api/songs", {
                method: "DELETE",
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json"
                },
                // ひらがな、漢字等も考慮してdecodeしている
                body: JSON.stringify(decodeURI(slug))
            })

            if (!response.ok) {
                throw new Error("データの送信に失敗しました.")
            }

            const data = await response.text()
            console.log(data)
        }
        console.log(flag)
        router.push("/")
    }

    const handleAddDetailData = (id: number, title: string, artist: string, rank: number, key: number, memo: string) => {
        SetLocalStrageSong(
            title,
            artist,
            rank,
            key,
            memo
        )

        SetLocalStrageId(id)

        router.push("/detail")
    }

    return (
        <>
            <div className=" h-full w-full flex justify-center ">
                <main aria-label="曲情報一覧ページ" className=" bg-white w-full h-full py-6 px-4 max-w-3xl shadow-xl flex flex-col overflow-y-scroll hidden-scrollbar space-y-3 ">
                    {songs.map((song: SongOnId, i: number) => (
                        <div key={i} className=" h-auto w-full bg-white shadow-md border-l-8 border-blue-400 py-6 space-y-2 px-4 rounded-md hover:border-blue-300 cursor-pointer " onClick={() => handleAddDetailData(song.id, song.title, song.artist, song.rank, song.key, song.memo ?? "")}>
                            <div className=" w-full flex flex-col space-y-1 ">
                                <span className=" whitespace-nowrap overflow-hidden text-ellipsis ">タイトル: {song.title}</span>
                                <span className=" whitespace-nowrap overflow-hidden text-ellipsis ">アーティスト: {song.artist}</span>
                                <span className=" whitespace-nowrap overflow-hidden text-ellipsis " >ランク: {song.rank}</span>
                            </div>
                            <div className=" w-full text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis ">{song.memo}</div>
                        </div>
                    ))}
                </main>
            </div>
            <div className=" fixed bottom-4 left-4 ">
                <div aria-label="全曲削除ボタン" className=" rounded-full bg-red-500 h-14 w-14 flex flex-col justify-center hover:bg-red-400 duration-200 " onClick={handleConfirm}>
                    <div className=" w-full flex justify-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50" className=" scale-90 ">
                            <path d="M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className=" fixed bottom-4 right-4 ">
                <Link aria-label="曲情報追加ボタン" href="/create" >
                    <div className=" rounded-full bg-blue-400 h-14 w-14 bold text-center hover:bg-blue-300 duration-200 ">
                        <div className=" h-full w-full flex justify-center ">
                            <span className=" text-5xl text-white ">
                                +
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default DisplayComponent;