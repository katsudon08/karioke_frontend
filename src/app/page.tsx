const page = () => {
    const hairetsu = [...Array(100)].map((v, i) => i)
    return (
        <div className=" bg-red-100 h-screen w-screen pt-20 px-8 pb-6 ">
            <div className=" bg-blue-100 h-full flex flex-col overflow-y-scroll text-center break-all py-2 px-6 ">
                {hairetsu.map((i) => (
                    <div className=" bg-red-200 grow my-2 py-2 rounded-md ">
                        {i}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default page;