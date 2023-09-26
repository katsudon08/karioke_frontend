import { Visibility } from "@/types";
import { useState } from "react";

const SideBar = ({ anchorEl, handleInVisible }: { anchorEl: Visibility, handleInVisible: () => void }) => {
    const hairetsu = [...Array(100)].map((v, i) => i)
    return (
        <div className={" fixed overflow-y-scroll top-0 left-0 h-screen w-5/12 z-10 py-4 pr-4 pl-2 bg-yellow-100 " + anchorEl}  >
            <div className=" max-h-fit w-full flex mb-2 ">
                <div className=" grow"></div>
                <div className=" bg-blue-100 py-1 px-2 rounded-md " onClick={handleInVisible} aria-label="閉じるボタン">
                    閉じる
                </div>
            </div>
            <div className=" ml-1 ">
                {hairetsu.map((i) => (
                    <div>
                        {i}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SideBar;