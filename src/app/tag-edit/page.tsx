"use client"

import { createTag } from "@/api";
import TagEditOrCreateComponent from "@/components/TagEditOrCreateComponent";
import { use, useEffect, useState } from "react";

const page = () => {
    const [tag, setTag] = useState<string>("")

    const handleSetTag = () => {
        setTag(tag)
    }

    return (
        <div className=" h-full flex flex-col justify-center items-center text-center break-all py-6 px-6 ">
            <main aria-label="タグ編集ページ" className=" bg-white h-2/5 w-full max-w-lg shadow-lg rounded-lg overflow-y-scroll hidden-scrollbar ">
                <TagEditOrCreateComponent isCreate={false} handleSetTag={handleSetTag}/>
            </main>
        </div>
    );
}

export default page;