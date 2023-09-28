import { Visibility } from "@/types";

const SideBar = ({ anchorEl, handleInVisible }: { anchorEl: Visibility, handleInVisible: () => void }) => {
    const hairetsu = [...Array(100)].map((v, i) => i)

    return (
        <main aria-label="サイドバー" className={" fixed overflow-y-scroll hidden-scrollbar top-0 left-0 h-screen w-5/12 z-10 py-4 pr-4 pl-2 bg-yellow-100 shadow-2xl " + anchorEl}  >
            <div className=" max-h-fit w-full flex justify-end mb-2 ">
                <div className=" bg-blue-100 py-1 px-2 rounded-md cursor-pointer " onClick={handleInVisible} aria-label="閉じるボタン">
                    閉じる
                </div>
            </div>
            <div className=" ml-1 ">
                {hairetsu.map((i) => (
                    <div key={i}>
                        {i}
                    </div>
                ))}
            </div>
        </main>
    );
}

export default SideBar;