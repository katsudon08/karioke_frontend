import TagEditComponent from "@/components/TagEditComponent";

const page = () => {
    return (
        <div className=" h-full flex flex-col justify-center items-center text-center break-all py-6 px-6 ">
            <main aria-label="タグ編集ページ" className=" bg-white h-2/5 w-full max-w-lg shadow-lg rounded-lg overflow-y-scroll hidden-scrollbar ">
                <TagEditComponent />
            </main>
        </div>
    );
}

export default page;