import Home from '@/components/Home'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'KARIOKE',
    description: 'カラオケの曲情報を管理するためのアプリです。',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.className}>
            <body className=' min-h-screen min-w-full '>
                <Home />
                <div className=" bg-red-100 h-screen w-screen pt-14 px-8 ">
                    {children}
                </div>
            </body>
        </html>
    )
}
