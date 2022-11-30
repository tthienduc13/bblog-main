import React from 'react'

function RightSideBar() {
  return (
    <>
    <div className='z-10  w-[240px] cursor-pointer drop-shadow-xl bg-[#fffcfcf7] rounded-2xl fixed top-[76px] right-[160px] px-4 py-4'> 
            <h1 className='font-bold text-lg block py-4 px-2 rounded-lg text-[#484e7d] hover:bg-[#f1f4fd] '>
                <i className="fa-solid fa-house mr-2 font-[20px]"></i>
                Home
            </h1>
            <h1 className='font-bold text-lg block py-4 px-2 rounded-lg  hover:bg-[#f1f4fd]  text-blue-400 '>
                <i className="fa-solid fa-flag mr-2 font-[20px] text-blue-500"></i>
                Pages
            </h1>
            <h1 className='font-bold text-lg block py-4 px-2 rounded-lg text-green-400 hover:bg-[#f1f4fd] '>
                <i className="fa-solid fa-user-group mr-2 font-[20px] text-green-500"></i>
                Groups
            </h1>
            <h1 className='font-bold text-lg block py-4 px-2 rounded-lg text-gray-500 hover:bg-[#f1f4fd] '>
                <i className="fa-solid fa-bell mr-2 font-[20px] text-gray-500"></i>
                Notification
            </h1>
            <h1 className='font-bold text-lg block py-4 px-2 rounded-lg  hover:bg-[#f1f4fd] '>
                <i className="fa-solid fa-gear mr-2 font-[20px]"></i>
                Settings
            </h1>
        </div>
    </>
  )
}

export default RightSideBar