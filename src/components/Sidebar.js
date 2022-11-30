import React from 'react'

function Sidebar() {
  return (
    <>
        <div className='z-10  w-[240px] cursor-pointer drop-shadow-xl bg-[#fffcfcf7] rounded-2xl fixed top-[76px] left-[160px] px-4 py-4'> 
            
            <h1 className='font-bold text-lg block py-4 px-2 hover:bg-[#f1f4fd] rounded-lg  text-red-400 '>
                <i className="fa-solid fa-fire-flame-curved mr-2 font-[20px] text-red-500"></i>
                Popular on BBLOG
            </h1>
            <ul>
                <li className='ml-4 p-2 text-[18px] hover:font-bold hover:text-[#162be8] opacity-80 font-semibold'>#sports</li>
                <li className='ml-4 p-2 text-[18px] hover:font-bold hover:text-[#162be8] opacity-80 font-semibold'>#showbiz</li>
                <li className='ml-4 p-2 text-[18px] hover:font-bold hover:text-[#162be8] opacity-80 font-semibold'>#politics_government</li>
                <li className='ml-4 p-2 text-[18px] hover:font-bold hover:text-[#162be8] opacity-80 font-semibold'>#technology</li>
                <li className='ml-4 p-2 text-[18px] hover:font-bold hover:text-[#162be8] opacity-80 font-semibold'>#civil_rights</li>
            </ul>
            <h1 className='font-bold text-lg block py-4 px-2 rounded-lg text-[#484e7d] hover:bg-[#f1f4fd] '>
                <i className="fa-solid fa-newspaper mr-2 font-[20px]"></i>
                News
            </h1>
            <h1 className='font-bold text-lg block py-4 px-2 rounded-lg text-yellow-500 hover:bg-[#f1f4fd] '>
                <i className="fa-regular fa-lightbulb mr-2 font-[20px]"></i>
                Tips for life
            </h1>
        </div>
    </>
  )
}

export default Sidebar