"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Page = () => {
    const [colorFlags, setColorFlags] = useState([true, true, true, false, false])
    const router = useRouter()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        console.log("submit")
        router.replace("/", { scroll: false })
    }

    const handleConfirm = () => {
        const flag = confirm("このデータを削除しますか？")
        console.log(flag)
    }

    const handleColorChange = (num: number) => {
        setColorFlags([...colorFlags].map((v: boolean, i: number) => (
            (i <= num) ? true : false
        )))
        console.log(colorFlags)
    }

    const colors = [...colorFlags].map((v: boolean) => (
        v ? "text-yellow-400" : "text-gray-400"
    ))

    return (
        <div className=" h-full flex flex-col items-center text-center break-all py-6 px-6 ">
            <main aria-label="曲情報作成ページ" className=" bg-white h-full w-full max-w-lg shadow-lg rounded-lg overflow-y-scroll hidden-scrollbar ">
                <form className=" flex flex-col h-full py-4 space-y-4 px-4 " onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title" className=" w-full flex justify-start ">タイトル</label>
                        <div
                            aria-label="タイトル名"
                            className=" shadow-sm border-2 w-full px-4 py-2 mt-0.5 rounded-lg focus:outline-none focus:border-blue-400 "
                            id="title"
                        >
                            タイトル名
                        </div>
                    </div>
                    <div>
                        <label htmlFor="singer" className=" w-full flex justify-start ">歌手</label>
                        <div
                            aria-label="歌手名"
                            className=" shadow-sm border-2 w-full px-4 py-2 mt-0.5 rounded-lg focus:outline-none focus:border-blue-400 "
                            id="singer"
                        >
                            歌手名
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
                    <div className=" flex flex-col h-full justify-end ">
                        <div className=" w-full flex justify-between ">
                            <button className=" w-full px-4 py-2 mr-1 text-white bg-red-500 rounded-lg hover:bg-red-400 hover:scale-95 duration-200 " onClick={handleConfirm}>
                                削除
                            </button>
                            <Link aria-label="編集ボタン" href="/edit" className=" w-full px-4 py-2 ml-1  text-white bg-green-500 rounded-lg hover:bg-green-400 hover:scale-95 duration-200 ">
                                編集
                            </Link>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Page;