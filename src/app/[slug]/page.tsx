import DisplayComponent from "@/components/DisplayComponent";
import { SongOnId } from "@/types";

const page = ({ slug }: { slug: string }) => {
    // TODO: apiでparamsのタグ名の曲情報一覧を取得

    const songs: SongOnId[] = [
        {
            id: 1,
            title: "title",
            artist: "artist",
            rank: 3,
            key: 8,
            memo: "pepepepepepepepe"
        },
        {
            id: 2,
            title: "ベノム",
            artist: "あっアー",
            rank: 4,
            key: 20,
            memo: "どおしてだよぉぉぉぉ"
        }
    ]

    return (
        <DisplayComponent songs={songs}/>
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