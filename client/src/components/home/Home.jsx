import React from 'react'
import { HiMenu} from 'react-icons/hi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { SideBar } from '../componentList'

const Home = () => {
  return (
    <div className='flex bg-grey-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out'>
      <div className='hidden md:flex h-screen flex-initial'>
        <SideBar />
      </div>
      Home
    </div>
  )
}

export default Home
