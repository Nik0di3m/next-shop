import Image from 'next/image'
import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'

interface HeaderProps {
    logo: string
}

const Header = ({ logo }: HeaderProps) => {
    return (
        <header className="flex justify-between h-24 items-center px-12 bg-[#1a1d1f]">
            <div>
                <div className="flex justify-center items-center space-x-20">
                    <div className="w-full">
                        <Image
                            src={logo}
                            alt=""
                            width={100}
                            height={70}
                        />
                    </div>
                    <div className="flex justify-start items-center flex-shrink-0 h-10 w-[320px] bg-[#272b30] rounded-md px-3 shadow-inner outline outline-1 outline-violet-900">
                        <SearchIcon className="w-6 h-6 text-zinc-400" />
                        <input
                            className="w-full h-full bg-transparent outline-none px-3"
                            type="text"
                            name=""
                            id=""
                            placeholder="Szukaj funkcji lub produktów"
                        />
                    </div>
                </div>
            </div>
            <div>
                <button className="text-lg font-semibold">
                    Logout
                </button>
            </div>
        </header>
    )
}

export default Header
