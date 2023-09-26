import Link from "next/link";

const page = () => {
    const hairetsu = [...Array(100)].map((v, i) => i)

    return (
        <>
            <div className=" bg-blue-100 h-full flex flex-col overflow-y-scroll text-center break-all py-4 px-6 ">
                {hairetsu.map((i) => (
                    <Link href="/edit" className=" bg-red-200 border-l-8 border-blue-400 grow my-4 py-6 rounded-md " >
                        {i}
                    </Link>
                ))}
            </div>
            <div className=" fixed bottom-4 right-4 ">
                <Link href="/create" >
                    <div className=" rounded-full bg-green-400 h-14 w-14 bold text-center align-middle ">
                        <div className=" font-bold text-5xl text-white ">
                            +
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default page;