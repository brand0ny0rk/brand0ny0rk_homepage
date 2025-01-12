import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome } from 'react-icons/ai';

const SideNav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div>
            <AiOutlineMenu onClick={handleNav}className='absolute top-4 right-4 z-[99] md:hidden' />
            {
                nav ? (
                    <div className='fixed h-screen w-full bg-black/90 flex flex-col justify-center items-center z-[20]'>
                        <a href="main" className='W-[75%] flex justify-center items'>
                            <AiOutlineHome size={20} />
                            <span className=''>Home</span>
                        </a>
                    </div>
                )
                : (
                    <div></div>
                )
            }
        </div>
    );
}

export default SideNav;