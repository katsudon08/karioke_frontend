import DisplayComponent from "@/components/DisplayComponent";
import { Song } from "@/types";

const page = ({ params }: { params: { name: string } }) => {
    // TODO: apiでparamsのタグ名の曲情報一覧を取得

    const songs: Song[] = [
        {
            title: "title",
            artist: "artist",
            rank: 3,
            key: 8,
            memo: "pepepepepepepepe"
        },
        {
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