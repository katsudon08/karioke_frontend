import TagSelectComponent from "@/components/TagSelectComponent";
import { cache, use } from "react";

const getTags = cache(async () => {
    const response = await import("@/app/api/tagOnIds/route")

    const data = await (await response.GET()).json()

    return data
})

const page = () => {
    const tags = [...use(getTags())].filter(tag => tag.name != null && tag.name !== "")

    return (
        <div className=" h-full w-full flex justify-center ">
            <main aria-label="タグ選択ページ" className=" bg-white w-full h-full px-4 max-w-3xl shadow-xl flex flex-col overflow-y-scroll hidden-scrollbar ">
                <TagSelectComponent tags={tags} />
            </main>
        </div>
    );
}

export default page;