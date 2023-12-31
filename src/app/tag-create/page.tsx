"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

const Page = () => {
    const tagNameRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const response = await fetch("/api/tag", {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name: tagNameRef.current?.value ?? "" })
        })

        if (!response.ok) {
            throw new Error("データの送信に失敗しました.")
        }

        const data = await response.json()
        console.log(data)

        router.replace("/")
    }

    return (
        <div className=" h-full flex flex-col justify-center items-center text-center break-all py-6 px-6 ">
            <main aria-label="タグ作成ページ" className=" bg-white h-2/5 w-full max-w-lg shadow-lg rounded-lg overflow-y-scroll hidden-scrollbar ">
                <form className=" flex flex-col h-full py-6 px-4 " onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="tagName" className=" w-full flex justify-start ">タグ名</label>
                        <input
                            ref={tagNameRef}
                            required
                            type="text"
                            className=" shadow-sm border-2 w-full px-4 py-2 mt-0.5 rounded-lg focus:outline-none focus:border-blue-400 "
                            id="tagName"
                        />
                    </div>
                    <div className=" grow " />
                    <button className=" w-full px-4 py-2  text-white bg-blue-500 rounded-lg hover:bg-blue-400 hover:scale-95 duration-200 ">
                        追加
                    </button>
                </form>
            </main>
        </div>
    );
}

export default Page;