import React from 'react'
import pic from '../image/hanu.png'
export default function Navbar() {
    return (
        <>
            <nav className='h-[80px] flex items-center justify-around w-full fixed bg-white z-50'>
                <div className='logo'>
                    <img src={pic} alt="" />
                </div>
                <div className='flex gap-[30px] text-[18px] font-[600]  text-xl'>
                <div className="list">
                    <p className=''>Upskillig Courses</p>
                </div>
                <div className="list">
                    <p className='text-gradient pb-[6px] border-b-[3px] border-gradient rounded-[10px]'>Coding Competitions</p>
                </div>
                <div className="list">
                    <p className=''>Interview Prep</p>
                </div>
                </div>
                <div className='flex gap-[20px] text-xl font-[600]'>
                <div className="btn">
                    <button className='text-white border-[2px] p-2 rounded-[10px]  bg-gradient-to-r from-sky-500 to-indigo-500'>Registration</button>
                </div>
                <div className="btn">
                    <button className='text-white border-[2px] p-2 rounded-[10px]  bg-gradient-to-r from-sky-500 to-indigo-500'>Login</button>
                </div>
                </div>
            </nav>
        </>
    )
}
