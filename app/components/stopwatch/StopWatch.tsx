"use client"

import { User } from '@/app/types/types';
import React, { useEffect, useState } from 'react'

const StopWatch = () => {

    const [users, setUsers] = useState([]);
    const [timecards, setTimecards] = useState([])
    const [workingState, setWorkingState] = useState(false)
    const [userId, setUserId] = useState("");
    const [savedStartedTime, setSavedStatedTime] = useState("")
    const [savedEndedTime, setSavedEndedTime] = useState("")
    const [saveStartTime,setSaveStartTime]= useState("")
    const [saveEndTime,setSaveEndTime] = useState("")
    const [startedData, setStartedData] = useState("")
    const [isStarted, setIsStarted] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0);


    useEffect(()=> {

        let interval;

        if(isStarted) {
            interval = setInterval(() => {
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 100)
            },100)
        } else {
            clearInterval(interval)
        }
        return clearInterval(interval)

    },[isStarted])


    const handleStart = async () => {
        setIsStarted(true)
    }

    const handleStop = async () => {
        setIsStarted(false)
    }

    const handleReset = async () => {

    }

  return (
    <div className=' flex flex-col mt-[160px] gap-5'>
            <div className=' bg-yellow-300 w-[1000px] h-[60px] flex gap-20 justify-center '>
                <div className='  border-2 border-slate-50 rounded-lg bg-gray-300 my-1 px-5 pt-3 text-center hover:scale-105 active:scale-95 cursor-pointer' onClick={handleStart} >スタート</div>
                <div className='  border-2 border-slate-50 rounded-lg my-1 px-5 pt-3 bg-red-500 hover:scale-105 active:scale-95 cursor-pointer' onClick={handleStop} >ストップ</div>

                { isStarted ? (

                    <div className=' border-2 border-black  my-1 rounded-lg px-5 pt-3 text-red-500 font-bold'  >計測中</div>
                ):
                (
                    <div className=' border-2 border-black  my-1 rounded-lg px-5 pt-3 text-blue-600 font-bold'   >停止中</div>
                    
                )}
                <div className='  border-2 border-slate-50 rounded-lg my-1 px-5 pt-3 '>経過時間</div>
                <div className=' border-2 border-black text-black my-1 rounded-lg px-5 pt-3' onClick={handleReset} >リセット</div>


            </div>
            {/* <div className=' bg-sky-400 w-[800px] h-[50px] flex gap-20 justify-center '>
                <div className='  border-2 border-slate-50 rounded-lg px-5 pt-3'>ボタン</div>
                <div className=' border-2 border-black text-slate-50 rounded-lg px-5 pt-3'  >状態</div>
                <div className='  border-2 border-slate-50 rounded-lg px-5 pt-3'>計測値</div>
                <div className=' border-2 border-black text-slate-50 rounded-lg px-5 pt-3'  >合計時間</div>


            </div>
            <div className=' bg-sky-400 w-[800px] h-[50px] flex gap-20 justify-center '>
                <div className='  border-2 border-slate-50 rounded-lg px-5 pt-3'>ボタン</div>
                <div className=' border-2 border-black text-slate-50 rounded-lg px-5 pt-3'  >状態</div>
                <div className='  border-2 border-slate-50 rounded-lg px-5 pt-3'>計測値</div>
                <div className=' border-2 border-black text-slate-50 rounded-lg px-5 pt-3'  >合計時間</div>


            </div> */}
        </div>
  )
}

export default StopWatch