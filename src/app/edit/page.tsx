import FormComponent from "@/components/FormComponent";
import { Song } from "@/types";

const Page = () => {
    const params: Song = {
        title: "テストのタイトルです",
        artist: "アーティストの名前",
        rank: 4,
        key: 70,
        memo: "メモ書きですよろしく"
    }

    return (
        <div className=" h-full flex flex-col justify-center items-center text-center break-all py-6 px-6 ">
            <main aria-label="曲情報編集ページ" className=" bg-white h-fit w-full max-w-lg shadow-lg rounded-lg overflow-y-scroll hidden-scrollbar ">
                <FormComponent isCreate={false}/>
            </main>
        </div>
    );
}

export default Page;