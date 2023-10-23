import DisplayComponent from "@/components/DisplayComponent";
import { SongOnId } from "@/types";
import { cache, use } from "react";

const getSongs = cache(async (tag: string) => {
    const response = await import("@/app/api/songs/route")

    const data = await (await response.GET(tag)).json()

    return data
})

const page = ({ params }: { params: { slug: string } }) => {
    // TODO: apiでparamsのタグ名の曲情報一覧を取得

    const songs: SongOnId[] = use(getSongs(decodeURI(params.slug)))

    return (
        <DisplayComponent songs={songs} />
    );
}

export default page;

// const page = ({ param }: { param: { slug: string } }) => {
//     return (
//         <div>
//             {/* {param.slug} */}
//             a
//         </div>
//     );
// }

// export default page;