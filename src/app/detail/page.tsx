import DetailComponent from "@/components/DetailComponent";

const Page = () => {
    return (
        <div className=" h-full flex flex-col justify-center items-center text-center break-all py-6 px-6 ">
            <main aria-label="曲情報詳細ページ" className=" bg-white h-fit w-full max-w-lg shadow-lg rounded-lg overflow-y-scroll hidden-scrollbar ">
                <DetailComponent />
            </main>
        </div>
    );
}

export default Page;