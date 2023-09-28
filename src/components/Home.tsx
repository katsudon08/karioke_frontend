"use client"

import { useState } from 'react'
import { Visibility } from '@/types'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import ModalWindow from './ModalWindow'

const Home = () => {
    const [anchorEl, setAnchorEl] = useState<Visibility>("invisible")

    const handleVisible = () => {
        setAnchorEl("visible")
    }

    const handleInVisible = () => {
        setAnchorEl("invisible")
    }

    return (
        <div className=' h-full w-full '>
            <SideBar anchorEl={anchorEl} handleInVisible={handleInVisible} />
            <Header handleVisible={handleVisible} />
            <ModalWindow />
        </div>
    );
}

export default Home;