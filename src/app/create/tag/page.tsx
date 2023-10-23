import TagComponent from "@/components/TagComponent";
import { cache } from "react";

const getTags = cache(async () => {
    const response = await import("@/app/api/tagsChecked/route")
})

const page = () => {
    return (
        <div className=" h-full flex flex-col justify-center items-center text-center break-all py-6 px-6 ">
            <main aria-label="曲情報作成ページ" className=" bg-white h-fit w-full max-w-lg shadow-lg rounded-lg overflow-y-scroll hidden-scrollbar ">
                <TagComponent isCreate={true} />
            </main>
        </div>
    );
}

export default page;