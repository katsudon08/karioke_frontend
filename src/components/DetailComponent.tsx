"use client"

import { Song } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DetailComponent = ({ songData }: { songData: Song }) => {
    const colorFlags = [true, true, true, false, false]
    const router = useRouter()
    // TODO: 選択した曲情報を取得してくる
    const song: Song = {
        title: "",
        artist: "",
        rank: 0,
        key: 50,
        memo: ""
    }

    const handleConfirm = () => {
        const flag = confirm("このデータを削除しますか？")
        console.log(flag)

        router.push("/")
    }

    const colors = [...colorFlags].map((v: boolean) => (
        v ? "text-yellow-400" : "text-gray-400"
    ))

    return (
        <div className=" flex flex-col h-full py-4 space-y-4 px-4 ">
            <div>
                <label htmlFor="title" className=" w-full flex justify-start ">タイトル</label>
                <div
                    aria-label="タイトル名"
                    className=" shadow-sm border-2 w-full px-4 py-2 mt-0.5 rounded-lg focus:outline-none focus:border-blue-400 "
                    id="title"
                >
                    {/* {songData.title} */}
                    タイトル名
                </div>
            </div>
            <div>
                <label htmlFor="artist" className=" w-full flex justify-start ">歌手</label>
                <div
                    aria-label="アーティスト名"
                    className=" shadow-sm border-2 w-full px-4 py-2 mt-0.5 rounded-lg focus:outline-none focus:border-blue-400 "
                    id="artist"
                >
                    アーティスト名
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
                    value={50}
                    type="range"
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
                    メモ
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