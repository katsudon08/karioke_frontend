"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const TagComponent = ({ isCreate }: { isCreate: boolean }) => {
    const router = useRouter()
    const hairetsu = ["A", "B", "C"]

    const handleAddTag = () => {
        console.log("tag add")
    }

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        console.log("submit")

        router.replace("/", { scroll: false })
    }

    return (
        <form className=" w-full flex flex-col h-full py-4 px-4 bg-white " onSubmit={handleSubmit}>
            <div className=" max-w-full space-y-6 ">
                <label aria-label="タグ選択" className=" w-full flex justify-start ">タグを選択</label>
                <div className=" flex space-x-2 ">
                    <input
                        type="text"
                        className=" shadow-sm border-2 w-full px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400 "
                    />
                    {/* ただのボタンと認識させるために、typeを指定 */}
                    <button type="button" className=" w-fit border-2 border-blue-500 text-blue-500 hover:border-blue-300 hover:text-blue-300 rounded-md px-4 whitespace-nowrap " onClick={handleAddTag}>
                        追加
                    </button>
                </div>
                <ul className=" w-full space-y-2 ">
                    {hairetsu.map((v, i) => (
                        <li className=" w-full p-4 rounded-lg shadow-md bg-gray-50 text-gray-500 inline-flex space-x-3 " key={i}>
                            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaElEQVR4nO3UQQrAIAxE0b/K1WvvWe0xWgpCsZhFIAuh88CNjFlIGJCXATvQgAqUfpeVdz0Pr88piXlXmww6E/OuOhl0JOZDX7cl5l3Wh9XAckXy8mOm5kLNNVJzyfpMzYWaa6TmWtMNHgmkswLjx3UAAAAASUVORK5CYII=" alt="点字" height={25} width={25} className=" scale-75 " />
                            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABy0lEQVR4nO3Yy0rDQBTG8X900a0oiBfQd1Cwq27ivk9Tn6Gta6noG+grCC5dCOJGULwsbVeKIK4EK4ETCCHNbZKZE9oDA6VJpvNjMh8zhUXNT+0D18A3MC3Z3oAjYMkVwgd+DADTWOu5RpwBKwZ9daWfVxwiRoBn2J8nff1hsTqR9XBe4Xs9laZ6JlrAEJhIG8p3TiBFEWGafRqmWa/KNCuKUJlmvgFCTZr5Bgg1adYpmE4q08y3NBOtOtPM5ut0nLCwB1VAbK+JiTx7ALTl89gU4mJhTxIg7yYQV+k0SHi1+mUhLiO2JQt8LDPRL7vYtURsWmVCmoDIhDQFkQppO952FK2ZkFu5cNoARCokPB/soB+xLL//m3TxUi7eAauKEcj4gjF8kVDrwGMKRgvCk/NMMI6rWTdtAk8JGE2IkYwjGM9e2s1bMUxXKcLP81CAeY7tdfKkmSpEWNsxTFaaqUREMS850kw1IqyNjDRrBCIazQ/S6T2wRv2IkwjisMrObWG8OhG2MJ4NRN0Yq4i6ME4QVWOcIqrCqECYYlQhymJUIopiVCPyYhqByMI0CjFro7kr55lKN4AuZmbatJlIwlwAH8CN/Am4qLmof9k7d6qQkVbuAAAAAElFTkSuQmCC" alt="タグアイコン" height={25} width={25} className=" mr-2 " />
                            <p>{v}</p>
                            <div className=" grow " />
                            <input type="checkbox" className=" scale-125 " />
                        </li>
                    ))}
                </ul>
                <button className=" w-full px-4 py-2  text-white bg-blue-500 rounded-lg hover:bg-blue-400 hover:scale-95 duration-200 ">
                    {isCreate ? "追加" : "確定"}
                </button>
            </div>
        </form>
    );
}

export default TagComponent;