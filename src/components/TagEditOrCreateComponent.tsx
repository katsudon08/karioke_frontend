"use client"

import { GetLocalStrageTag } from "@/lib/getStrageTag";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect, FormEvent, use } from "react";

const TagEditOrCreateComponent = ({ isCreate, handleSetTag }: { isCreate: boolean, handleSetTag(tagName: string): void }) => {
    // useRef1をfor文で扱ってはいけない
    const tagNameRef = useRef<HTMLInputElement>(null)
    const [tagName, setTagName] = useState<string>("")
    const router = useRouter()

    useEffect(() => {
        isCreate || setTagName(GetLocalStrageTag())
    }, [])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        handleSetTag(tagNameRef.current?.value ?? "")
        router.replace("/")
    }

    return (
        <form className=" flex flex-col h-full py-6 px-4 " onSubmit={handleSubmit}>
            <div>
                <label htmlFor="tagName" className=" w-full flex justify-start ">タグ名</label>
                <input
                    ref={tagNameRef}
                    defaultValue={tagName}
                    required
                    type="text"
                    className=" shadow-sm border-2 w-full px-4 py-2 mt-0.5 rounded-lg focus:outline-none focus:border-blue-400 "
                    id="tagName"
                />
            </div>
            <div className=" grow "/>
            <button className=" w-full px-4 py-2  text-white bg-blue-500 rounded-lg hover:bg-blue-400 hover:scale-95 duration-200 ">
                {isCreate ? "追加" : "確定"}
            </button>
        </form>
    );
}

export default TagEditOrCreateComponent;