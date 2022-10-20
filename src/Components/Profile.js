import React from 'react'
import Icon from './Icon'

const Profile = ({ name, username, button, className }) => {
    return (
        <li className={` hover:bg-logo-hover transition-all ${className} `}>
        <a href='#!' className={`py-3 h-full block`}>
            <div className='px-3 flex items-center   '>
                <div className='rounded-full'>
                    <img src='https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' className="w-12 h-12 rounded-full object-cover" alt="" />
                </div>
                <div className='flex flex-col pl-3 justify-center'>
                    <span className='text-text font-bold'>
                        {name}
                    </span>
                    <span className='text-subtext leading-4'>
                        {username}
                    </span>
                </div>
                <div className='ml-auto'>
                    {
                        button === 'circle' ?
                            <Icon circle className='w-7 h-7'></Icon>:
                            <button className='bg-black text-white font-semibold px-5 py-2 rounded-full hover:bg-black/70'>Follow</button>
                        }

                </div>
            </div>
        </a>
        </li>
    )
}

export default Profile