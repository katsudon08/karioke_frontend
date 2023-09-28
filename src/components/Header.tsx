import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = ({ handleVisible }: { handleVisible: () => void }) => {
    const pathname = usePathname()
    const title = (pathname === "/") ? "HOME" : pathname.slice(1, pathname.length).toUpperCase()

    return (
        <header className=" min-w-full h-14 top-0 left-0 py-2 px-6 fixed z-0 bg-white bg-opacity-80 ">
            <div className=" min-w-full min-h-full flex justify-center items-center ">
                <div className=" min-w-full flex justify-between ">
                    <div aria-label="メニューボタン" className=" bg-gray-200 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-300 duration-300 " onClick={handleVisible}>
                        メニュー
                    </div>
                    <div className=" flex flex-col justify-center h-fit ">
                        <h1 className=" font-medium text-xl font-sans "> {title} </h1>
                    </div>
                    <div aria-label="アカウント画面遷移ボタン" className=" bg-gray-200 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-300 duration-300 ">
                        <Link href="/account">
                            アカウント
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;