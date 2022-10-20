import React from 'react'
import Icon from './Icon'
import icons from '../icons.json'

const Tweet = ({ info }) => {
    
    

    const x = info.time ? ((new Date() - new Date(info.time.toDate().toString())) / 1000 / 60).toFixed() : 1;
    
    return (
        <div className='flex border-b px-4 pt-3 cursor-pointer hover:bg-text/5 transition-all'>
            <div className='mr-3 w-12 flex flex-shrink-0'>
                <img src={info.profilepic} className="w-12 h-12 rounded-full object-cover " alt="" />
            </div>
            <div className='flex-auto pb-2'>
                <div className='relative'>
                    <span className='font-bold text-text hover:underline'>{info.name}</span>
                    <span className='text-subtext text-sm ml-1'>{info.username}</span>

                    <span className='text-subtext text-sm ml-1 hover:underline'>{ `${x <1 ? 1 : x }m`}</span>

                    <a href="#!" className='absolute top-0 right-0 hover:bg-main/10 hover:text-main rounded-full text-subtext transition-all'>
                        <Icon circle className='w-7 h-7' />
                    </a>
                </div>
                <div className='text-text tracking-tight '>
                    <p>{info.content}</p>
                </div>

                <div className='flex justify-between items-center mt-1   text-subtext max-w-[425px] '>

                    <a href="#!" className='p-2 -ml-2 rounded-full  flex items-center justify-center transition-all group relative'>
                    <div className='w-9 h-9  group-hover:bg-main/10 absolute rounded-full inset-0 transition-all'></div>
                        <div className='flex items-center justify-center group-hover:text-main transition-all'>
                        
                            <Icon path={icons.reply} className='w-5 h-5  '></Icon>

                            <span className='text-xs ml-3  '>506</span>
                        </div>
                    </a>

                    <a href="#!" className='p-2 -ml-2 rounded-full  flex items-center justify-center transition-all group relative'>
                    <div className='w-9 h-9  group-hover:bg-green-400/10 absolute rounded-full inset-0 transition-all'></div>
                        <div className='flex items-center justify-center group-hover:text-green-400 transition-all'>
                        
                            <Icon path={icons.retweet} className='w-5 h-5  '></Icon>

                            <span className='text-xs ml-3  '>23</span>
                        </div>
                    </a>

                    <a href="#!" className='p-2 -ml-2 rounded-full  flex items-center justify-center transition-all group relative'>
                    <div className='w-9 h-9  group-hover:bg-red-400/10 absolute rounded-full inset-0 transition-all'></div>
                        <div className='flex items-center justify-center group-hover:text-red-400 transition-all'>
                        
                            <Icon path={icons.like} className='w-5 h-5  '></Icon>

                            <span className='text-xs ml-3  '>6623</span>
                        </div>
                    </a>

                    <a href="#!" className='p-2 rounded-full  hover:bg-logo-hover transition-all hover:text-main'><Icon path={icons.upload} path2={icons.upload2} className='w-5 h-5 '></Icon> </a>

                </div>
            </div>
        </div>
    )
}

export default Tweet