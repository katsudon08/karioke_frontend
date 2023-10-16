"use client"

import { GetLocalStrageSong, SetLocalStrageTag } from "@/api";
import { PostData, Song, Tag } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FormEvent, useState, useRef, ChangeEvent } from "react";

const TagSelectComponent = ({ tagNames }: { tagNames: string[] }) => {
    const router = useRouter()
    const [tags, setTags] = useState<string[]>([])
    useEffect(() => {
        setTags(tagNames)
    }, [])

    const handleEditTag = (name: string) => {
        SetLocalStrageTag(name)
        router.push("/tag-edit")
    }

    return (
        <div className=" w-full flex flex-col h-full bg-white ">
                <ul className=" w-full space-y-3 ">
                    {tags.map((v: string, i: number) => (
                        <li className=" w-full p-4 rounded-lg shadow-md bg-gray-50 text-gray-500 inline-flex space-x-3 " key={i} onClick={() => handleEditTag(v)}>
                            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaElEQVR4nO3UQQrAIAxE0b/K1WvvWe0xWgpCsZhFIAuh88CNjFlIGJCXATvQgAqUfpeVdz0Pr88piXlXmww6E/OuOhl0JOZDX7cl5l3Wh9XAckXy8mOm5kLNNVJzyfpMzYWaa6TmWtMNHgmkswLjx3UAAAAASUVORK5CYII=" alt="点字" height={25} width={25} className=" scale-75 " />
                            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABy0lEQVR4nO3Yy0rDQBTG8X900a0oiBfQd1Cwq27ivk9Tn6Gta6noG+grCC5dCOJGULwsbVeKIK4EK4ETCCHNbZKZE9oDA6VJpvNjMh8zhUXNT+0D18A3MC3Z3oAjYMkVwgd+DADTWOu5RpwBKwZ9daWfVxwiRoBn2J8nff1hsTqR9XBe4Xs9laZ6JlrAEJhIG8p3TiBFEWGafRqmWa/KNCuKUJlmvgFCTZr5Bgg1adYpmE4q08y3NBOtOtPM5ut0nLCwB1VAbK+JiTx7ALTl89gU4mJhTxIg7yYQV+k0SHi1+mUhLiO2JQt8LDPRL7vYtURsWmVCmoDIhDQFkQppO952FK2ZkFu5cNoARCokPB/soB+xLL//m3TxUi7eAauKEcj4gjF8kVDrwGMKRgvCk/NMMI6rWTdtAk8JGE2IkYwjGM9e2s1bMUxXKcLP81CAeY7tdfKkmSpEWNsxTFaaqUREMS850kw1IqyNjDRrBCIazQ/S6T2wRv2IkwjisMrObWG8OhG2MJ4NRN0Yq4i6ME4QVWOcIqrCqECYYlQhymJUIopiVCPyYhqByMI0CjFro7kr55lKN4AuZmbatJlIwlwAH8CN/Am4qLmof9k7d6qQkVbuAAAAAElFTkSuQmCC" alt="タグアイコン" height={25} width={25} className=" mr-2 " />
                            <div className=" w-full overflow-x-scroll hidden-scrollbar flex justify-start " key={i}>
                                <label htmlFor={String(i)} className=" whitespace-nowrap ">{v}</label>
                            </div>
                        </li>
                    ))}
                </ul>
        </div>
    );
}

export default TagSelectComponent;