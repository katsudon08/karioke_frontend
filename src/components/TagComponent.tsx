"use client"

import { GetLocalStrageId } from "@/lib/getStrageId";
import { GetLocalStrageSong } from "@/lib/getStrageSong";
import { PostData, Song, SongOnId, Tag, TagOnId } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { FormEvent, useState, useRef, ChangeEvent } from "react";

const TagComponent = ({ isCreate, checkedTags, tagIds }: { isCreate: boolean, checkedTags: Tag[], tagIds: number[] }) => {
    const router = useRouter()
    const ref = useRef<HTMLInputElement>(null)
    const [anchorEl, setAnchorEl] = useState<boolean>(false)
    const [tags, setTags] = useState<Tag[]>([])
    useEffect(() => {
        console.log("checkedTags", checkedTags)
        setTags(checkedTags)
    }, [checkedTags])

    const handleAddTag = async () => {
        console.log("tag add")
        const addTag: Tag = {
            name: ref.current?.value ?? "",
            checked: false,
        }

        // nameが同じタグをのぞくために、nameをキーとした連想配列作成後に値のみを取り出して配列へと変換したものをset
        const newTags = [...tags, addTag]
        const tagsMap = new Map(newTags.map((newTag) => [newTag.name, newTag]))
        const tagsMapArray = Array.from(tagsMap.values())

        setAnchorEl((tagsMapArray.length < newTags.length))

        if (ref.current?.value !== "") setTags(tagsMapArray)
        if (ref.current?.value) ref.current.value = ""

        const response = await fetch("/api/tag", {
            method: "POST",
            cache: "no-store",
            body: JSON.stringify({ name: addTag.name })
        })

        if (!response.ok) {
            throw new Error("データの送信に失敗しました.")
        }

        const data = await response.json()

        console.log(data)
    }

    const handleToggleChange = (num: number) => {
        console.log("toggle")

        const newTags = [...tags]
        newTags.map((tag: Tag, i: number) => {
            if (i === num) {
                tag.checked = !tag.checked
            }
            return newTags
        })

        setTags(newTags)
        console.log(newTags)
    }

    const handleCreate = async (e: FormEvent) => {
        e.preventDefault()
        const song: Song = GetLocalStrageSong()

        const filterTags = [...tags].filter(tag => tag.checked)

        const nameTags: string[] = [...filterTags].map((tag: Tag) => tag.name)
        console.log(nameTags)

        const post: PostData = {
            title: song.title,
            artist: song.artist,
            rank: Number(song.rank),
            key: Number(song.key),
            memo: song.memo,
            tags: nameTags
        }

        const response = await fetch("/api/song", {
            method: "POST",
            cache: "no-store",
            body: JSON.stringify(post)
        })

        if (!response.ok) {
            throw new Error("データの送信に失敗しました.")
        }

        const data = await response.text()
        console.log(data)

        console.log("submit")
        router.replace("/")
    }

    const handleEdit = async (e: FormEvent) => {
        e.preventDefault()
        const id: number = GetLocalStrageId()
        const song: Song = GetLocalStrageSong()

        const tagIndex: (number | null)[] = [...tags].map((tag: Tag, i: number) => {
            if (tag.checked) {
                return i
            }else {
                return null
            }
        })
        // 配列からnullableな値を除去するため、型情報を書き換える必要がある
        const filterTagIndex: number[] = [...tagIndex].filter((index): index is NonNullable<typeof index> => index !== null)
        const filterTagIds = [...filterTagIndex].map(index => tagIds[index])

        const putData: SongOnId = {
            id: id,
            title: song.title,
            artist: song.artist,
            rank: Number(song.rank),
            key: Number(song.key),
            memo: song.memo
        }
        console.log(putData)

        const putTagIds: number[] = filterTagIds

        const put = {
            data: putData,
            tagIds: putTagIds
        }

        const response = await fetch("/api/song", {
            method: "PUT",
            cache: "no-store",
            body: JSON.stringify(put)
        })

        if (!response.ok) {
            throw new Error("データの送信に失敗しました.")
        }

        const data = await response.text()
        console.log(data)

        console.log("submit")
        router.replace("/")
    }

    return (
        <form className=" w-full flex flex-col h-full px-4 bg-white " onSubmit={isCreate ? handleCreate : handleEdit}>
            <div className=" max-w-full space-y-6 py-6 ">
                <label aria-label="タグ選択" className=" w-full flex justify-start ">タグを選択</label>
                <div className=" flex space-x-2 ">
                    <input
                        ref={ref}
                        type="text"
                        className=" shadow-sm border-2 w-full px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400 "
                    />
                    {/* ただのボタンと認識させるために、typeを指定 */}
                    <button type="button" className=" w-fit border-2 border-blue-500 text-blue-500 hover:border-blue-300 hover:text-blue-300 rounded-md px-4 whitespace-nowrap " onClick={handleAddTag}>
                        追加
                    </button>
                </div>
                {/* エラーメッセージの表示、非表示 */}
                <p aria-label="タグの重複エラー表示" className={" text-red-500 text-xs whitespace-nowrap " + (anchorEl ? "block" : "hidden")}>
                    同じ名前のタグが既に存在しています
                </p>
                <ul className=" w-full space-y-2 ">
                    {tags.map((v: Tag, i: number) => (
                        <li className=" w-full p-4 rounded-lg shadow-md bg-gray-50 text-gray-500 inline-flex space-x-3 " key={i}>
                            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaElEQVR4nO3UQQrAIAxE0b/K1WvvWe0xWgpCsZhFIAuh88CNjFlIGJCXATvQgAqUfpeVdz0Pr88piXlXmww6E/OuOhl0JOZDX7cl5l3Wh9XAckXy8mOm5kLNNVJzyfpMzYWaa6TmWtMNHgmkswLjx3UAAAAASUVORK5CYII=" alt="点字" height={25} width={25} className=" scale-75 " />
                            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABy0lEQVR4nO3Yy0rDQBTG8X900a0oiBfQd1Cwq27ivk9Tn6Gta6noG+grCC5dCOJGULwsbVeKIK4EK4ETCCHNbZKZE9oDA6VJpvNjMh8zhUXNT+0D18A3MC3Z3oAjYMkVwgd+DADTWOu5RpwBKwZ9daWfVxwiRoBn2J8nff1hsTqR9XBe4Xs9laZ6JlrAEJhIG8p3TiBFEWGafRqmWa/KNCuKUJlmvgFCTZr5Bgg1adYpmE4q08y3NBOtOtPM5ut0nLCwB1VAbK+JiTx7ALTl89gU4mJhTxIg7yYQV+k0SHi1+mUhLiO2JQt8LDPRL7vYtURsWmVCmoDIhDQFkQppO952FK2ZkFu5cNoARCokPB/soB+xLL//m3TxUi7eAauKEcj4gjF8kVDrwGMKRgvCk/NMMI6rWTdtAk8JGE2IkYwjGM9e2s1bMUxXKcLP81CAeY7tdfKkmSpEWNsxTFaaqUREMS850kw1IqyNjDRrBCIazQ/S6T2wRv2IkwjisMrObWG8OhG2MJ4NRN0Yq4i6ME4QVWOcIqrCqECYYlQhymJUIopiVCPyYhqByMI0CjFro7kr55lKN4AuZmbatJlIwlwAH8CN/Am4qLmof9k7d6qQkVbuAAAAAElFTkSuQmCC" alt="タグアイコン" height={25} width={25} className=" mr-2 " />
                            <div className=" w-full overflow-x-scroll hidden-scrollbar flex justify-start " key={i}>
                                <label htmlFor={String(i)} className=" whitespace-nowrap ">{v.name}</label>
                            </div>
                            <div className=" grow " />
                            <div className=" flex flex-col justify-center ">
                                <input id={String(i)} size={50} name={v.name} type="checkbox" defaultChecked={v.checked} className=" scale-150 " onChange={(e: ChangeEvent) => handleToggleChange(i)} />
                            </div>
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