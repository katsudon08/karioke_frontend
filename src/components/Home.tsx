"use client"

import { useState } from 'react'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'

const Home = () => {
    const [anchorEl, setAnchorEl] = useState<boolean>(false)

    const handleToggleVisible = () => {
        setAnchorEl(!anchorEl)
    }

    return (
        <div className=' h-full w-full '>
            <SideBar anchorEl={anchorEl} handleToggleVisible={handleToggleVisible} />
            <Header handleToggleVisible={handleToggleVisible} />
        </div>
    );
}

export default Home;