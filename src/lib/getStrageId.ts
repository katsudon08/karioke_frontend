"use client"

export const GetLocalStrageId = () => {
    if (typeof window !== 'undefined') {
        const id = localStorage.getItem("id") ?? ""

        return Number(id)
    } else {
        return 0
    }
}