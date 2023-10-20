"use client"

export const GetLocalStrageTag = () => {
    if (typeof window !== 'undefined') {
        const tagName = localStorage.getItem("tagName") ?? ""

        return tagName
    } else {
        return ""
    }
}