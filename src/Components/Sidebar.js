import React from 'react'
import icons from '../icons.json'
import Icon from './Icon'
import Profile from './Profile'

const TrendItem = ({ toptext, maintext, subtext }) => {
    return (
        <li>
            <a href='#!' className='px-4 flex  flex-col relative py-3 hover:bg-text/10 transition-all duration-200 text-subtext'>
                <span className='text-xs '>{toptext}</span>
                <span className='text-text font-semibold'>{maintext}</span>
                <span className='text-xs'>{subtext} Tweets</span>
                <Icon circle className='w-7 h-7 absolute top-2 right-3  hover:bg-main/10 hover:text-main rounded-full' />
            </a></li>
    )
}



const Sidebar = () => {
    return (
        <aside className=' w-[350px] ml-10'>
            <div className='bg-white sticky top-0  w-[350px] z-10 pt-1 pb-1 h-14 mb-3 '>

                <div className='flex items-center bg-input rounded-full h-full pl-5 pr-7    focus-within:bg-white  focus-within:ring-main text-subtext focus-within:text-main focus-within:ring-2 ' >
                    <Icon path={icons.search} className="w-6 h-6 mr-4  " />
                    <input type="text" placeholder='Search Twitter' className='w-full bg-inherit   placeholder-subtext outline-none text-subtext' />
                </div>
            </div>

            <div className='  bg-input rounded-2xl  top-0 mb-5'>
                <div>
                    <h2 className='p-4 font-bold text-xl '>Trends for you</h2>
                </div>
                <ul>

                    <TrendItem toptext={'Trending in Turkey'} maintext={'Batshuayi'} subtext={'4,761'} />
                    <TrendItem toptext={'Trending in Turkey'} maintext={'Serdar'} subtext={'53,751'} />
                    <TrendItem toptext={'Sports · Trending'} maintext={'Fenerbahce'} subtext={'4,761'} />

                    <TrendItem toptext={'Entertainment · Trending'} maintext={'XXXX'} subtext={'13.1K'} />

                    <TrendItem toptext={'Trending in Turkey'} maintext={'Lorem ipsum'} subtext={'63.8K'} />
                    <TrendItem toptext={'Trending in Turkey'} maintext={'Lorem ipsum'} subtext={'63.8K'} />
                    <TrendItem toptext={'Trending in Turkey'} maintext={'Lorem ipsum'} subtext={'63.8K'} />
                    <TrendItem toptext={'Trending in Turkey'} maintext={'Lorem ipsum'} subtext={'63.8K'} />
                    <TrendItem toptext={'Trending in Turkey'} maintext={'Lorem ipsum'} subtext={'63.8K'} />

                </ul>

                <button className='py-4 px-3 w-full text-main inline-flex justify-start hover:bg-text/10 rounded-b-3xl tracking-tight'>
                    Show More
                </button>
            </div>

            <div className='mb-5  bg-input rounded-3xl '>
                <div>
                    <h2 className='p-3 font-bold text-2xl '>Who to follow</h2>
                </div>
                <ul>
                    <Profile name='Lorem Ipsum' username='@loremipsum32' className='rounded-none' />
                    <Profile name='XXX QQQ' username='@xqxqxq' />
                    <Profile name='askdska123' username='@1258281sa' />
                </ul>

                <button className='py-4 px-3 w-full text-main inline-flex justify-start hover:bg-text/10 rounded-b-3xl tracking-tight'>
                    Show More
                </button>
            </div>

            <nav className='mt-5 px-3 text-[13px] flex flex-wrap text-subtext  '>
                <a href="#!" className='pr-3 hover:underline'>Terms of Service</a>
                <a href="#!" className='pr-3 hover:underline'>Privacy Policy</a>
                <a href="#!" className='pr-3 hover:underline'>Cookie Policy</a>
                <a href="#!" className='pr-3 hover:underline'>Imprint</a>
                <a href="#!" className='pr-3 hover:underline'>Accessibility</a>
                <a href="#!" className='pr-3 hover:underline'>Ads info</a>
                <a href="#!" className='pr-[2px] hover:underline'>More</a>
                <div className='inline-flex items-center'>
                    <Icon circle className='w-4 h-4' />
                </div>
            </nav>
            <div className='px-3 mb-5'>
                <span className='text-xs text-subtext'>
                    © 2022 SEC, Inc.
                </span>
            </div>

        </aside>
    )
}

export default Sidebar