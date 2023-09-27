"use client"

import { FormEvent, useState } from "react";

const page = () => {
    const [colors, setColor] = useState(["text-gray-300", "text-gray-300", "text-gray-300", "text-gray-300", "text-gray-300"])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        console.log("submit")
    }

    const handleColorChange = (num: number) => {
        setColor([...Array(5)].map((v: string, i: number) => (
            v = i <= num ? "text-yellow-400" : "text-gray-300"
        )))
    }

    return (
        <div className=" bg-blue-100 h-full flex flex-col items-center text-center break-all py-6 px-6 ">
            <div className=" bg-green-200 h-full w-full max-w-lg shadow-lg rounded-lg ">
                <form className=" flex flex-col py-4 space-y-4 px-4 " onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className=" w-full px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400 "
                        name="title"
                    />
                    <input
                        type="text"
                        className=" w-full px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400 "
                        name="singer"
                    />
                    <div className="">
                        <p>頻度</p>
                        <div>
                            <span className=" flex justify-center ">
                                <input id="review01" type="checkbox" className=" hidden " onClick={() => handleColorChange(0)} /><label htmlFor="review01" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[0]}>★</label>
                                <input id="review02" type="checkbox" className=" hidden " onClick={() => handleColorChange(1)} /><label htmlFor="review02" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[1]}>★</label>
                                <input id="review03" type="checkbox" className=" hidden " onClick={() => handleColorChange(2)} /><label htmlFor="review03" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[2]}>★</label>
                                <input id="review04" type="checkbox" className=" hidden " onClick={() => handleColorChange(3)} /><label htmlFor="review04" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[3]}>★</label>
                                <input id="review05" type="checkbox" className=" hidden " onClick={() => handleColorChange(4)} /><label htmlFor="review05" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[4]}>★</label>
                            </span>
                        </div>
                    </div>
                    <div>
                        <p>キー</p>
                        <input
                            type="range"
                            className=" w-full  py-2 rounded-lg focus:outline-none focus:border-blue-400 "
                            name="key"
                        />
                    </div>
                    <textarea
                        name="memo"
                        className=" w-full px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400 "
                    >
                    </textarea>
                    <button className=" w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-400 hover:scale-95 duration-200 ">追加</button>
                </form>
            </div>
        </div>
    );
}

export default page;