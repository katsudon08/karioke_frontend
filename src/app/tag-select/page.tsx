import TagSelectComponent from "@/components/TagSelectComponent";

const page = () => {
    // TODO: apiでタグの名前一覧を取得
    const tagNames = ["a", "aaa", "asd"]

    return (
        <div className=" h-full w-full flex justify-center ">
            <main aria-label="タグ選択ページ" className=" bg-white w-full h-full py-6 px-4 max-w-3xl shadow-xl flex flex-col overflow-y-scroll hidden-scrollbar ">
                <TagSelectComponent tagNames={tagNames} />
            </main>
        </div>
    );
}

export default page;