"use client"

import { Song } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState, useRef } from "react";

const FormComponent = ({ isCreate }: { isCreate: boolean }) => {
    const [song, setSong] = useState<Song>({
        title: "",
        artist: "",
        rank: 0,
        key: 0,
    })
    const refs = [...Array(3)].map(() => (useRef<HTMLInputElement>(null)))
    const memoRef = useRef<HTMLTextAreaElement>(null)
    const [colorFlags, setColorFlags] = useState([...Array(5).fill(false)])
    const router = useRouter()
    const pathname = usePathname()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        let rank = 0

        refs.map((v) => (
            console.log(v.current?.value)
        ))
        console.log(memoRef.current?.value)

        colorFlags.map((v) => (
            v && rank++
        ))

        console.log(rank)

        setSong({
            title: String(refs[0].current?.value),
            artist: String(refs[1].current?.value),
            rank: rank,
            key: Number(refs[2].current?.value)-50,
            memo: memoRef.current?.value
        })

        console.log(song)

        // router.push(`${pathname}/tag`, { scroll: false })
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
        <form className=" flex flex-col h-full py-4 space-y-4 px-4 " onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title" className=" w-full flex justify-start ">タイトル</label>
                <input
                    ref={refs[0]}
                    required
                    type="text"
                    className=" shadow-sm border-2 w-full px-4 py-2 mt-0.5 rounded-lg focus:outline-none focus:border-blue-400 "
                    id="title"
                />
            </div>
            <div>
                <label htmlFor="artist" className=" w-full flex justify-start ">アーティスト</label>
                <input
                    ref={refs[1]}
                    required
                    type="text"
                    className=" shadow-sm border-2 w-full px-4 py-2 mt-0.5 rounded-lg focus:outline-none focus:border-blue-400 "
                    id="artist"
                />
            </div>
            <div>
                <p className=" w-full flex justify-start ">ランク</p>
                <div>
                    <span className=" flex justify-center ">
                        <input key={0} id="review01" type="checkbox" className=" hidden " onClick={(e) => handleColorChange(0)} /><label htmlFor="review01" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[0]}>★</label>
                        <input key={1} id="review02" type="checkbox" className=" hidden " onClick={(e) => handleColorChange(1)} /><label htmlFor="review02" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[1]}>★</label>
                        <input key={2} id="review03" type="checkbox" className=" hidden " onClick={(e) => handleColorChange(2)} /><label htmlFor="review03" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[2]}>★</label>
                        <input key={3} id="review04" type="checkbox" className=" hidden " onClick={(e) => handleColorChange(3)} /><label htmlFor="review04" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[3]}>★</label>
                        <input key={4} id="review05" type="checkbox" className=" hidden " onClick={(e) => handleColorChange(4)} /><label htmlFor="review05" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[4]}>★</label>
                    </span>
                </div>
            </div>
            <div>
                <label htmlFor="key" className=" w-full flex justify-start ">キー</label>
                <input
                    ref={refs[2]}
                    required
                    type="range"
                    className=" w-full  py-2 rounded-lg focus:outline-none focus:border-blue-400 "
                    id="key"
                />
            </div>
            <div>
                <label htmlFor="memo" className=" w-full flex justify-start ">メモ</label>
                <textarea
                    ref={memoRef}
                    className=" shadow-sm border-2 w-full max-h-14 hidden-scrollbar px-4 py-2 mt-0.5 rounded-lg focus:outline-none focus:border-blue-400 "
                    id="memo"
                >
                </textarea>
            </div>
            <button className=" w-full px-4 py-2  text-white bg-blue-500 rounded-lg hover:bg-blue-400 hover:scale-95 duration-200 ">
                次へ
            </button>
        </form>
    );
}

export default FormComponent;