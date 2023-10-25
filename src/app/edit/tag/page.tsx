import TagComponent from "@/components/TagComponent";
import { cache, use } from "react";

const getTags = cache(async () => {
    const response = await import("@/app/api/tags/route")

    const data = await (await response.GET()).json()

    return data
})

const page = () => {
    const tagNames = use(getTags())
    const filterTags = [...tagNames].filter(tag => tag != null && tag !== "")
    const checkedTags = [...filterTags].map(tag => ({
        name: tag,
        checked: false
    }))

    return (
        <div className=" h-full flex flex-col justify-center items-center text-center break-all py-6 px-6 ">
            <main aria-label="曲情報編集ページ" className=" bg-white h-fit w-full max-w-lg shadow-lg rounded-lg overflow-y-scroll hidden-scrollbar ">
                <TagComponent isCreate={false} checkedTags={checkedTags}/>
            </main>
        </div>
    );
}

export default page;