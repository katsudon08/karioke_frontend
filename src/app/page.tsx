import Link from "next/link";

const page = () => {
    const hairetsu = [...Array(100)].map((v, i) => i)

    return (
        <>
            <div className=" h-full w-full flex justify-center ">
                <main aria-label="曲情報一覧ページ" className=" bg-blue-100 w-full h-full py-6 px-4 max-w-3xl shadow-xl flex flex-col overflow-y-scroll hidden-scrollbar text-center space-y-3 break-all ">
                    {hairetsu.map((i) => (
                        <Link key={i} href="/edit" className=" bg-red-200 shadow-md border-l-8 border-blue-400 grow py-6 rounded-md hover:border-blue-300 " >
                            {i}
                        </Link>
                    ))}
                </main>
            </div>
            <div className=" fixed bottom-4 right-4 ">
                <Link href="/create" >
                    <div className=" rounded-full bg-green-400 h-14 w-14 bold text-center hover:bg-green-300 duration-200 ">
                        <div className=" h-full w-full flex justify-center ">
                            <span className=" text-5xl text-white ">
                                +
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default page;