"use client"

import { createTag, getTags } from "@/api";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";

const SideBar = ({ anchorEl, handleToggleVisible }: { anchorEl: boolean, handleToggleVisible: () => void }) => {
    // タグ一覧を取得
    const tags: string[] = use(getTags())
    const router = useRouter()

    const handleAddTag = () => {
        handleToggleVisible()
        router.push("/tag-create")
    }

    const handleSelectTag = () => {
        handleToggleVisible()
        router.push("/tag-select")
    }

    const handleHomeTag = () => {
        handleToggleVisible()
        router.push("/")
    }

    const handleSwitchTag = (tagName: string) => {
        handleToggleVisible()
        router.push(`/${tagName}`)
    }

    return (
        <div className=" duration-400 ">
            {/* サイドバーの表示、非表示 */}
            <main aria-label="サイドバー" className={" bg-white overflow-y-scroll hidden-scrollbar top-0 left-0 h-screen w-5/12 z-10 shadow-2xl transition-transform " + (anchorEl ? "fixed" : "hidden")}  >
                <div className=" max-h-fit w-full flex justify-end py-2 pr-2 shadow-sm ">
                    <div aria-label="閉じるボタン" className=" bg-white shadow-md py-1 px-3 text-2xl rounded-md cursor-pointer hover:bg-red-500 hover:text-white " onClick={handleToggleVisible}>
                        ×
                    </div>
                </div>
                <div aria-label="タグの作成ボタン" className=" w-full py-2 pl-2 shadow-sm cursor-pointer hover:bg-gray-50 flex space-x-2 " onClick={handleAddTag}>
                    <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWElEQVR4nO2ay08UQRDGf0Zk12BEFhCPcjQY9Z9QQVGBG4o3DV5Egl59nNGTCQl/hwYJJGoQ3w/Ui4LISeVgxJsLBM2ait8knbiz7M727s4SvmSyj66prpqurq7+emATGxcpoAu4CYwBs8BPYFWXff+oNpM5BTQQEySBs8Ak8AfIFHj9BiaAPiBRCQe2A5eBRceoFeABcFUjs09PfJuuBv1nbdeAh7onuP8bMKSHUxYcBxYcA14B54D6CLp2AeeB146+z0AHJYQ9qVGnwzfAEY/624G3jv6RUozOHhluHfwCLgJbfXfCP52XgLQz2i2+lLdquDPKOvspPQ4Ac+pzXjYUhWZH4UugifKhAXisvhcUFZGQdMLpKVBH+VEHPHfCLNKcGXXCyRa7SqHRiQpLAAWn2GBil2NO5DNn0rLJslvei12wTlh2igsGncmfV4hdcdaJUqTYqKgB3sk2cyonEioVTPgw8cMx2ba43qj0ORkijtjiZNLTuQQnJWS1ky+8AJ551NcvG8fDBFIqq1ciFoBhCGonnwvlKrAWZme3OryPX/h2xDAlnSfIgltqtP1E3B25IZ3D2RrH1HiyChzpls472Ro/qdF2cXF3pE06jRf4D0tqTFWBI03S+T1b46oaayMono5APASX3VsoEg5PEBtHHvl2ZKmKQqs5V2htmMk+pkZjAOPuSE+u9BssiEaeVfWC2KVGYwurpUTpDCvGgqLRGMC4OpJyisadYUIT6tRoTF+Yjphiw3BBNt4LlQDOSMi42LhurGZkY+96C81XCR4lfuiUbV/yOYYYkvBMDMmH97JtIJ8bkg7Xa4RyXDAkm+YKORTq0E1pkWOVxiFgWTYVfJQx4jwBoy0rhWaRcmbL7SgKkqKFMiKSK0Fi7xALk9FnopinMescK9jvciEFPHGO44o+8Gl1htbC7CDlmRPz6tOq8r2+FLc4YZYW92rp0DdqlJ2WnXDa7buTpJMAMiKUOzyu2HaUEawTwcQu6dl7uzPsAWvfH/EthpRqp6DsyCiUfJ4Wrzs6g045k1FFauX1dfFObUrbtboadWjUI5kphycIyo6BSr0BkRArPq4tQKHEw5p2pr2VciAb6sXF2q7trs4efzgv1dj3D9qeDks2dD+xCaocfwGfzEwBMfegNQAAAABJRU5ErkJggg==" alt="追加アイコン" height={25} width={25} />
                    <p>タグの作成</p>
                </div>
                <div aria-label="タグの編集ボタン" className=" w-full py-2 pl-2 shadow-sm cursor-pointer hover:bg-gray-50 flex space-x-2 " onClick={handleSelectTag}>
                    <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/ElEQVR4nO3Zu0vEMBzA8a+DDg5uCm5OgoI4uqugIL4L4iKIu//E6YEu6vmY/BdEJ1dRdxEVXAT/BhXfj0gghVD7Oi5JW+kPwpUm90s/lzaX3MHfEBbKLdCJ4xD/BSNUMZ3POUZYglxrrx0G8zuHtANXLkdGWILgGiMsQpxihGWIM4xwAHGCEY4g1jHCIcQqRjiGWMOIDCBWMCIjiAyjGJtrrXrLtYmOTUWjq+bcQDK7DlFCCjQiwlIpIXFRPiOGQ5SzVoFurTagtciz1jhwo85/AydAf9EgS8BPyHsfgd56IS7jHDhTxx7wGfNBHOUZQgiiBtyHQB7IOcTTEBV1risEk2uIF4IgAnOY14fdi0H4sa3qn4CePEK8FIiqqpftJiLaZHprzQIfqv+1iDYVVf8FzMclywoiRyIJsaLqZbuZpIRZQNIgVjXEdJqkriFpEFVV/w5MpU1s+mHPBOESkoRoAjY0xGRMrtiLtRlpEJsaInKKzRKSBrHVKMI2JA2ipiHk/oO8QQYSvrElYlfVvwKjjXZoC7Kj8h5EIPY0xIiJDm1B7rSlxUIA4SPfgDFTHdqAdAemZIlZDNxOL8CwyU5NrGblNlWP5ZA28seDU3X8DAyZRJiC+HttP45j2krEIAWIFnXbBEfjAlgH+ihINAOXamu6D8yp/wqNxi8s9E5U65tPCgAAAABJRU5ErkJggg==" alt="編集アイコン" height={25} width={25}/>
                        <p>タグの編集</p>
                </div>
                <div aria-label="全てのタグ" className=" w-full py-2 pl-2 shadow-sm cursor-pointer hover:bg-gray-50 flex space-x-2 " onClick={handleHomeTag}>
                    すべて
                </div>
                <div className=" py-2 ">
                    {tags.map((v: string, i: number) => (
                        <div key={i} className=" w-full py-2 pl-2 cursor-pointer hover:bg-gray-50 " onClick={() => handleSwitchTag(v)}>
                            {v}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default SideBar;