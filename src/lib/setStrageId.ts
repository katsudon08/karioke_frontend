"use client"

export const SetLocalStrageId = (id: number | undefined) => {
    localStorage.setItem("id", String(id) ?? "0")
}