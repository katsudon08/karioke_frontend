"use client"

import { CreateColorFlags } from "@/lib/createColor";
import { GetLocalStrageId } from "@/lib/getStrageId";
import { GetLocalStrageSong } from "@/lib/getStrageSong";
import { Song } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DetailComponent = () => {
    const router = useRouter()
    const song: Song = GetLocalStrageSong()
    const colorFlags: boolean[] = CreateColorFlags([...Array(5).fill(false)], song.rank)
    const colors = [...colorFlags].map((v: boolean) => (
        v ? "text-yellow-400" : "text-gray-400"
    ))

    const handleConfirm = async () => {
        const flag = confirm("このデータを削除しますか？")
        console.log(flag)

        if (flag) {
            const response = await fetch("/api/song", {
                method: "DELETE",
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: GetLocalStrageId()
                })
            })

            if (!response.ok) {
                throw new Error("データの削除に失敗しました.")
            }

            const data = await response.json()
            console.log(data)
        }

        router.push("/")
    }


    return (
        <div className=" flex flex-col h-full py-4 space-y-4 px-4 ">
            <div>
                <label htmlFor="title" className=" w-full flex justify-start ">タイトル</label>
                <div
                    aria-label="タイトル名"
                    className=" shadow-sm border-2 w-full px-4 py-2 mt-0.5 rounded-lg focus:outline-none focus:border-blue-400 "
                    id="title"
                >
                    {song.title}
                </div>
            </div>
            <div>
                <label htmlFor="artist" className=" w-full flex justify-start ">歌手</label>
                <div
                    aria-label="アーティスト名"
                    className=" shadow-sm border-2 w-full px-4 py-2 mt-0.5 rounded-lg focus:outline-none focus:border-blue-400 "
                    id="artist"
                >
                    {song.artist}
                </div>
            </div>
            <div>
                <p className=" w-full flex justify-start ">ランク</p>
                <div aria-label="曲の評価">
                    <span className=" flex justify-center ">
                        <label htmlFor="review01" className={" text-3xl px-2 " + colors[0]}>★</label>
                        <label htmlFor="review02" className={" text-3xl px-2 " + colors[1]}>★</label>
                        <label htmlFor="review03" className={" text-3xl px-2 " + colors[2]}>★</label>
                        <label htmlFor="review04" className={" text-3xl px-2 " + colors[3]}>★</label>
                        <label htmlFor="review05" className={" text-3xl px-2 " + colors[4]}>★</label>
                    </span>
                </div>
            </div>
            <div>
                <label htmlFor="key" className=" w-full flex justify-start ">キー</label>
                <input
                    aria-label="キーのプラスマイナス"
                    readOnly
                    value={song.key}
                    type="range"
                    min={0}
                    max={25}
                    className=" w-full  py-2 rounded-lg  disabled:bg-blue-400 disabled:text-blue-400 disabled:border-blue-400 "
                    id="key"
                />
            </div>
            <div>
                <label htmlFor="memo" className=" w-full flex justify-start ">メモ</label>
                <div
                    aria-label="メモ欄"
                    className=" shadow-sm border-2 w-full max-h-16 hidden-scrollbar px-4 py-2 mt-0.5 rounded-lg focus:outline-none focus:border-blue-400 "
                    id="memo"
                >
                    {song.memo}
                </div>
            </div>
            <div className=" w-full flex justify-between ">
                <button className=" w-full px-4 py-2 mr-1 text-white bg-red-500 rounded-lg hover:bg-red-400 hover:scale-95 duration-200 " onClick={handleConfirm}>
                    削除
                </button>
                <Link aria-label="編集ボタン" href="/edit" className=" w-full px-4 py-2 ml-1  text-white bg-green-500 rounded-lg hover:bg-green-400 hover:scale-95 duration-200 ">
                    編集
                </Link>
            </div>
        </div>
    );
}

export default DetailComponent;