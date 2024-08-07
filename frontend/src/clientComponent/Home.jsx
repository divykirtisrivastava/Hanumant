import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mern from '../assets/mern.png'
import data from '../assets/data.webp'

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
    const cardRef = useRef(null)
    useGSAP(()=>{
        let tl = gsap.timeline()
        tl.from('.head', { opacity: 0, y: -50, duration: 1, stagger:0.5 });
        tl.from('#btn',{opacity: 0, y: -20, repeat:-1, duration:1, yoyo:1})
        gsap.from('.card', {
            opacity: 0,
            scale: 0,
            duration: 1,
            stagger:0.4,
            scrollTrigger: {
              trigger: '.card',
            //   start: "top 80%",
            //   end: "top 20%",
            //   scrub: true,
            }
          });
    })
    return (
    <div>
      <div className='h-[100vh] w-full bg-black relative'>
        <div className='flex h-full flex-col items-center justify-start gap-[30px] absolute h-[80%] top-[120px] w-full'>
            <h1 className='text-bg-animation text-3xl font-bold text-center relative  font-mono'>Hanumant Technology...</h1>
 
       <div className='flex flex-col leading-[100px]'>
       <h1 className='head text-white relative text-center  text-[90px] font-momo font-bold'>Get the tech career</h1>
        <h1 className='head text-white relative text-center text-[95px] font-momo font-bold'>you deserve. Faster.</h1>
        <h1 className='head text-gray-400 relative text-center  text-xl font-sarif font-bold mt-[20px]'>Structured coding courses that get you there faster with confidence.</h1>
       </div>

        <button id='btn' className='text-white border-[2px] p-4 rounded-[10px]  bg-gradient-to-r from-sky-500 to-indigo-500 text-xl font-bold  mt-[20px]'>Explore Courses <i class="fas fa-angle-double-down ml-[8px]"></i></button>
        </div>
      </div>

      <div className='w-full bg-white p-[30px]'>
            <h1 className='uppercase text-center text-7xl font-bold font-momo text-gray-400 mt-[20px]'>our Upskillig Courses</h1>
           <div className='flex justify-evenly flex-wrap w-full mt-[40px] gap-[40px]'>
           <div className='card w-[400px] h-[160px] border-[2px] border-gradient flex flex-col items-center justify-around '>
                <div className='flex items-center gap-[20px] '>
                    <img src={mern} width="80px" alt="" />
                    <span className='text-xl font-[600]'>Full Stack Web Development</span>
                </div>
                <div className='flex gap-[30px] text-[16px]'>
                    <span>6 month duration</span>
                    <span>300+ Problems</span>
                    <span>10+ Project</span>
                </div>
            </div>
           <div  className='card w-[400px] h-[160px] border-[2px] border-gradient flex flex-col items-center justify-around '>
                <div className='flex items-center gap-[20px] '>
                    <img src={data} width="80px" alt="" />
                    <span className='text-xl font-[600]'>
                    Data Analytics</span>
                </div>
                <div className='flex gap-[30px] text-[16px]'>
                    <span>6 month duration</span>
                    <span>300+ Problems</span>
                    <span>10+ Project</span>
                </div>
            </div>
           <div className='card w-[400px] h-[160px] border-[2px] border-gradient flex flex-col items-center justify-around '>
                <div className='flex items-center gap-[20px] '>
                    <img src={mern} width="80px" alt="" />
                    <span className='text-xl font-[600]'>Full Stack Web Development</span>
                </div>
                <div className='flex gap-[30px] text-[16px]'>
                    <span>6 month duration</span>
                    <span>300+ Problems</span>
                    <span>10+ Project</span>
                </div>
            </div>
           <div className='card w-[400px] h-[160px] border-[2px] border-gradient flex flex-col items-center justify-around '>
                <div className='flex items-center gap-[20px] '>
                    <img src={mern} width="80px" alt="" />
                    <span className='text-xl font-[600]'>Full Stack Web Development</span>
                </div>
                <div className='flex gap-[30px] text-[16px]'>
                    <span>6 month duration</span>
                    <span>300+ Problems</span>
                    <span>10+ Project</span>
                </div>
            </div>
           <div className='card w-[400px] h-[160px] border-[2px] border-gradient flex flex-col items-center justify-around '>
                <div className='flex items-center gap-[20px] '>
                    <img src={mern} width="80px" alt="" />
                    <span className='text-xl font-[600]'>Full Stack Web Development</span>
                </div>
                <div className='flex gap-[30px] text-[16px]'>
                    <span>6 month duration</span>
                    <span>300+ Problems</span>
                    <span>10+ Project</span>
                </div>
            </div>
           <div className='card w-[400px] h-[160px] border-[2px] border-gradient flex flex-col items-center justify-around '>
                <div className='flex items-center gap-[20px] '>
                    <img src={mern} width="80px" alt="" />
                    <span className='text-xl font-[600]'>Full Stack Web Development</span>
                </div>
                <div className='flex gap-[30px] text-[16px]'>
                    <span>6 month duration</span>
                    <span>300+ Problems</span>
                    <span>10+ Project</span>
                </div>
            </div>
           </div>
      </div>
    </div>
  )
}
