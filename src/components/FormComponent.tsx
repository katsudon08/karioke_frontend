"use client"

import { CreateColorFlags } from "@/lib/createColor";
import { GetLocalStrageSong } from "@/lib/getStrageSong";
import { SetLocalStrageSong } from "@/lib/setStrageSong";
import { Song } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState, useRef, useEffect } from "react";

const FormComponent = ({ isCreate }: { isCreate: boolean }) => {
    // useRef1をfor文で扱ってはいけない
    const titleRef = useRef<HTMLInputElement>(null)
    const artistRef = useRef<HTMLInputElement>(null)
    const keyRef = useRef<HTMLInputElement>(null)
    const memoRef = useRef<HTMLTextAreaElement>(null)
    const [song, setSong] = useState<Song>({
        title: "",
        artist: "",
        rank: 0,
        key: 13,
        memo: ""
    })

    const [colorFlags, setColorFlags] = useState<boolean[]>([...Array(5).fill(false)])
    const router = useRouter()
    const pathname = usePathname()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        console.log(titleRef.current?.value)
        console.log(artistRef.current?.value)
        console.log(keyRef.current?.value)
        console.log(memoRef.current?.value)

        let rank = 0

        colorFlags.map((v) => (
            v && rank++
        ))

        console.log(rank)

        SetLocalStrageSong(
            titleRef.current?.value,
            artistRef.current?.value,
            rank,
            Number(keyRef.current?.value),
            memoRef.current?.value
        )
        router.replace(`${pathname}/tag`)
    }

    const handleColorChange = (num: number) => {
        const newColorFlags = CreateColorFlags(colorFlags, num)
        setColorFlags(newColorFlags)
    }

    const colors = [...colorFlags].map((v: boolean) => (
        v ? "text-yellow-400" : "text-gray-400"
    ))

    const editInit = () => {
        const song: Song = GetLocalStrageSong()

        setSong(song);
        handleColorChange(song.rank)
    }

    useEffect(() => {
        isCreate || editInit()
        // ESLintのwarningを無効化
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <form className=" flex flex-col h-full py-4 space-y-4 px-4 " onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title" className=" w-full flex justify-start ">タイトル</label>
                <input
                    ref={titleRef}
                    defaultValue={song.title}
                    required
                    type="text"
                    className=" shadow-sm border-2 w-full px-4 py-2 mt-0.5 rounded-lg focus:outline-none focus:border-blue-400 "
                    id="title"
                />
            </div>
            <div>
                <label htmlFor="artist" className=" w-full flex justify-start ">アーティスト</label>
                <input
                    ref={artistRef}
                    defaultValue={song.artist}
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
                        <input key={0} id="review01" type="checkbox" className=" hidden " onClick={(e) => handleColorChange(1)} /><label htmlFor="review01" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[0]}>★</label>
                        <input key={1} id="review02" type="checkbox" className=" hidden " onClick={(e) => handleColorChange(2)} /><label htmlFor="review02" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[1]}>★</label>
                        <input key={2} id="review03" type="checkbox" className=" hidden " onClick={(e) => handleColorChange(3)} /><label htmlFor="review03" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[2]}>★</label>
                        <input key={3} id="review04" type="checkbox" className=" hidden " onClick={(e) => handleColorChange(4)} /><label htmlFor="review04" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[3]}>★</label>
                        <input key={4} id="review05" type="checkbox" className=" hidden " onClick={(e) => handleColorChange(5)} /><label htmlFor="review05" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[4]}>★</label>
                    </span>
                </div>
            </div>
            <div>
                <label htmlFor="key" className=" w-full flex justify-start ">キー</label>
                <input
                    ref={keyRef}
                    required
                    type="range"
                    defaultValue={song.key}
                    min={0}
                    max={25}
                    className=" w-full  py-2 rounded-lg focus:outline-none focus:border-blue-400 "
                    id="key"
                />
            </div>
            <div>
                <label htmlFor="memo" className=" w-full flex justify-start ">メモ</label>
                <textarea
                    ref={memoRef}
                    defaultValue={song.memo}
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