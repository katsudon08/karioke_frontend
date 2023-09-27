import Link from "next/link";

const Header = ({ handleVisible }: { handleVisible: () => void }) => {
    return (
        <header className=" min-w-full h-14 top-0 left-0 py-2 px-6 fixed z-0 bg-white ">
            <div className=" min-w-full min-h-full flex justify-center items-center ">
                <div className=" min-w-full flex justify-between ">
                    <div aria-label="メニューボタン" className=" bg-blue-100 py-1 px-2 rounded-md " onClick={handleVisible}>
                        メニュー
                    </div>
                    <div aria-label="アカウント画面遷移ボタン" className=" bg-blue-100 py-1 px-2 rounded-md ">
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