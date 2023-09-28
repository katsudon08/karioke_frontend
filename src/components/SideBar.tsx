import { Visibility } from "@/types";

const SideBar = ({ anchorEl, handleInVisible }: { anchorEl: Visibility, handleInVisible: () => void }) => {
    // const hairetsu = [...Array(100)].map((v, i) => i)
    const hairetsu: string[] = []

    const handlePrompt = () => {
        const foldername = prompt("新しく作成するフォルダの名前を入力してください")
        if (foldername) hairetsu.push(foldername)
        console.log(foldername)
    }

    return (
        <div className=" duration-400 ">
            <main aria-label="サイドバー" className={" bg-white fixed overflow-y-scroll hidden-scrollbar top-0 left-0 h-screen w-5/12 z-10 shadow-2xl transition-transform " + anchorEl}  >
                <div className=" max-h-fit w-full flex justify-end py-2 pr-2 shadow-sm ">
                    <div className=" bg-gray-200 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-300 " onClick={handleInVisible} aria-label="閉じるボタン">
                        閉じる
                    </div>
                </div>
                <div aria-label="フォルダの作成ボタン" className=" w-full py-2 pl-4 shadow-sm cursor-pointer hover:bg-gray-50 " onClick={handlePrompt}>
                    フォルダの作成
                </div>
                <div className=" py-2 ">
                    {hairetsu.map((i) => (
                        <div key={i} className=" w-full py-2 pl-2 cursor-pointer hover:bg-gray-50 ">
                            {i}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default SideBar;