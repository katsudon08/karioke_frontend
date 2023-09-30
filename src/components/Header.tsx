import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = ({ handleToggleVisible }: { handleToggleVisible: () => void }) => {
    const pathname = usePathname()
    const title = (pathname === "/") ? "HOME" : pathname.slice(1, pathname.length).toUpperCase()

    return (
        <header className=" min-w-full h-14 top-0 left-0 py-2 px-6 fixed z-0 bg-white bg-opacity-80 ">
            <div className=" min-w-full min-h-full flex justify-center items-center ">
                <div className=" min-w-full flex justify-start ">
                    <div aria-label="メニューボタン" className=" bg-white shadow-md py-1 px-2 flex flex-col justify-center rounded-md cursor-pointer hover:bg-gray-300 duration-300 " onClick={handleToggleVisible}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50">
                            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                        </svg>
                    </div>
                    <div aria-label="ホームボタン" className=" bg-white shadow-md py-1 px-2 ml-2 flex flex-col justify-center rounded-md cursor-pointer hover:bg-gray-300 duration-300 ">
                        <Link href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50">
                                <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
                            </svg>
                        </Link>
                    </div>
                    <div className=" flex flex-col justify-center h-fit grow ml-4 ">
                        <h1 className=" font-medium text-xl font-sans "> {title} </h1>
                    </div>
                    <div aria-label="アカウント画面遷移ボタン" className=" bg-white shadow-md py-1 px-1 rounded-md cursor-pointer hover:bg-gray-300 duration-300 ">
                        <Link href="/account">
                            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABSUlEQVR4nN2UPU4DMRCFP4KSBgoOQc3CJRAdUYCEW1DwU1MCSRckLoByJTYEuAK/BT9iF430VlotNrYp86QnWfab8XhmPDDv6AADYALkwJuYa68vzb+wA9wDZYB3QC/F8SIwcjgqgKlYOM6HQCvmApfzHFiraTJd1NRdxKSlafQth01knpd0fc47yqcreh9cr3jwFX7gKeI08QLjnks88YgLT4rWPSkyXqdEU+osazi//UPvTOtLoN+LQJvWab5+4TXiU5WRfE5NUZnIm9giPwJX6rBVYEm09b7OnmKL3K8J3oFjYJkwTHMim8p+N/TRxqTjUrYzoO0T9ST6BDYTnG8BX7LdDomHEprBaWBCLgAHwIdszmKiaWkq1jviENgAVkRbH+ms0p3HjusKXeUz1JKzmLT40NbgsrazaO0zGm1te9Yt3oLOB34ACqrfyi5MYE4AAAAASUVORK5CYII=" alt="アカウント" width={25} height={25} className=" scale-110 " />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;