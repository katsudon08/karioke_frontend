export const CreateColorFlags = (colorFrags: boolean[], num: number) => {
    const newColorFlags = [...colorFrags].map((v: boolean, i: number) => (
        (i < num) ? true : false
    ))

    console.log(newColorFlags)
    return newColorFlags
}