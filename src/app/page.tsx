const page = () => {
    const hairetsu = [...Array(100)].map((v, i) => i)
    return (
        <div className=" bg-red-100 h-screen w-screen pt-20 px-8 pb-6 ">
            <div className=" bg-blue-100 h-full flex flex-col overflow-y-scroll break-all ">
                {hairetsu.map((i) => (
                    <div>
                        {i}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default page;