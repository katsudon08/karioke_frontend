"use client"

export const SetLocalStrageTag = (name: string | undefined) => {
    localStorage.setItem("tagName", name ?? "")
}
