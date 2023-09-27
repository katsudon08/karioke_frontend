"use client"

import { FormEvent, useState } from "react";

const page = () => {
    const [colorFlags, setColorFlag] = useState([false, false, false, false, false])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        console.log("submit")
    }

    const handleColorChange = (num: number) => {
        setColorFlag([...Array(5)].map((v: boolean, i: number) => (
            v = i > num ? false : true
        )))
    }

    const colors = colorFlags ? "text-yellow-400" : "text-gray-400"

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
                        <p>レビュー</p>
                        <div>
                            <span className=" flex flex-row-reverse justify-end ">
                                <input id="0" type="radio" className=" hidden " onChange={() => handleColorChange(0)}/><label htmlFor="0" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[0]}>★</label>
                                <input id="1" type="radio" className=" hidden " onChange={() => handleColorChange(1)}/><label htmlFor="1" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[1]}>★</label>
                                <input id="2" type="radio" className=" hidden " onChange={() => handleColorChange(2)}/><label htmlFor="2" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[2]}>★</label>
                                <input id="3" type="radio" className=" hidden " onChange={() => handleColorChange(3)}/><label htmlFor="3" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[3]}>★</label>
                                <input id="4" type="radio" className=" hidden " onChange={() => handleColorChange(4)}/><label htmlFor="4" className={" text-3xl px-2 cursor-pointer hover:text-yellow-400 " + colors[4]}>★</label>
                            </span>
                        </div>
                    </div>
                    <input
                        type="range"
                        className=" w-full  py-2 rounded-lg focus:outline-none focus:border-blue-400 "
                        name="key"
                    />
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