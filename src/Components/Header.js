import React from 'react'
import icons from '../icons.json';
import Icon from './Icon';
import Profile from './Profile';


const NavLink = ({ name, path, path2, circle, className }) => {
    return (
        <>
            <li className={`w-full  group py-1  ${className}`}>
                <a href="#!" className='flex items-start'>
                    <div className='flex items-center p-[10px] group-hover:bg-text/10 rounded-full transition-all'>
                        <Icon path={path} path2={path2} circle={circle} className="w-7 h-7" />
                        <span className='text-lg ml-4 mr-3 tracking-wide'>{name}</span>
                    </div>

                </a>
            </li>

        </>
    )
}


const Header = () => {
    return (
        <header className='w-72'>
            <div className='flex flex-col justify-between  fixed top-0 h-full w-72 px-3'>
                <div className=''>
                    <a href="#!" className='hover:bg-logo-hover px-2 py-2 rounded-full inline-flex items-center justify-center'>
                        <Icon path={icons.logo} className="w-8 h-8 inline text-main" ></Icon>
                    </a>

                    <nav className='mt-3'>
                        <ul className=''>
                            <NavLink name="Home" path={icons.home} path2={icons.home2} className="active" />
                            <NavLink name="Explore" path={icons.explore} />
                            <NavLink name="Notifications" path={icons.notifications} className="active" />
                            <NavLink name="Messages" path={icons.messages} />
                            <NavLink name="Bookmarks" path={icons.bookmarks} />
                            <NavLink name="Lists" path={icons.lists} path2={icons.lists2} />
                            <NavLink name="Profile" path={icons.profile} />
                            <NavLink name="More" path={icons.more} circle />

                        </ul>
                    </nav>

                    <button className='bg-main text-white font-bold rounded-full py-3 px-6 w-5/6 shadow-lg hover:bg-main-hover transition-all mt-5'>
                        Tweet
                    </button>
                </div>

                <ul className='mb-3'>
                    <Profile name='Serdar' username='@serdar333' button='circle' className='rounded-full' />
                </ul>

            </div>
        </header>
    )
}

export default Header

