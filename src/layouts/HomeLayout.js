import React from 'react'
import Sidebar from '../components/Sidebar'
import RandomDataTable from '../components/RamdomTable'
import Home from '../pages/Home'

const HomeLayout = ({ children }) => {
    return (
        <div>
            <img src='https://images.pexels.com/photos/14354111/pexels-photo-14354111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="bitcoin"></img>
            <div>{children}</div>
            <Home />
            <RandomDataTable />
        </div>
    )
}

export default HomeLayout