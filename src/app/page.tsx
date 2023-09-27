import Link from "next/link";

const page = () => {
    const hairetsu = [...Array(100)].map((v, i) => i)

    return (
        <>
            <div className=" bg-blue-100 h-full flex flex-col overflow-y-scroll hidden-scrollbar text-center break-all py-4 px-6 shadow-xl ">
                {hairetsu.map((i) => (
                    <Link key={i} href="/edit" className=" bg-red-200 border-l-8 border-blue-400 grow my-4 py-6 rounded-md " >
                        {i}
                    </Link>
                ))}
            </div>
            <div className=" fixed bottom-4 right-4 ">
                <Link href="/create" >
                    <div className=" rounded-full bg-green-400 h-14 w-14 bold text-center ">
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