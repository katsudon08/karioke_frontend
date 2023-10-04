"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const FormComponent = ({ isCreate }: { isCreate: boolean }) => {
    const [colorFlags, setColorFlags] = useState([...Array(5).fill(false)])
    const router = useRouter()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        console.log("submit")
        isCreate ?
            router.replace("/create-tag", { scroll: false })
            :
            router.replace("/edit-tag", { scroll: false })
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
                    type="text"
                    className=" shadow-sm border-2 w-full px-4 py-2 mt-0.5 rounded-lg focus:outline-none focus:border-blue-400 "
                    id="title"
                />
            </div>
            <div>
                <label htmlFor="artist" className=" w-full flex justify-start ">アーティスト</label>
                <input
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
                    type="range"
                    className=" w-full  py-2 rounded-lg focus:outline-none focus:border-blue-400 "
                    id="key"
                />
            </div>
            <div>
                <label htmlFor="memo" className=" w-full flex justify-start ">メモ</label>
                <textarea
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