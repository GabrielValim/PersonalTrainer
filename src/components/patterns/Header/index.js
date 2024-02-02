import Link from 'next/Link';
import Image from 'next/image'
import logo from '../../../../public/images/logo.png' 
import { useState } from 'react';
import { motion } from "framer-motion"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBars,
    faXmark
  } from "@fortawesome/free-solid-svg-icons";


export default function Header() {

    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    }

    return (
    <header>
        <motion.nav 
            className='fixed isolate w-full z-10 flex'
            transition={{ ease: "easeOut", duration: 0.6 }}             
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [-100, 0] }}
            exit={{ opacity: 0 }}
        >
            <div className='w-full flex items-center justify-between bg-ice-white p-8 lg:pl-20'>
                <div>  
                    <Link href='/' className="flex items-center gap-2 font-bold text-lg text-black-dark">
                        <Image
                        src={logo}
                        alt='Logo'
                        width={55}
                        height={55}
                        />
                        Power
                    </Link>
                </div> 
                <div 
                className={`text-2xl text-black-dark 
                ${menuAberto ? 'ease-in-out duration-300 icon-transition rotate-90' : 'icon-transition'} lg:hidden`} 
                onClick={toggleMenu}>   
                {menuAberto ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars}/>}
                </div>
            </div> 
            <ul 
                className={`absolute top-24 left-0 w-full p-8 flex items-center justify-center flex-col gap-9 bg-ice-white duration-300 z-[-1] -translate-y-full 
                ${menuAberto ? 'translate-y-0' : ''} lg:translate-y-0 lg:flex-row lg:static lg:p-0 lg:duration-0 lg:justify-end lg:pr-20`}           
            >
                <li>
                    <Link 
                        className='text-black-dark  text-base duration-300 hover:text-red-primary' 
                        href='/'
                    >
                        Alunos
                    </Link>
                </li>
                <li>
                    <Link 
                        className='text-black-dark  text-base duration-300 hover:text-red-primary' 
                        href='/'
                    >
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link 
                        className='text-black-dark  text-base duration-300 hover:text-red-primary'
                        href='/'
                    >
                        Serviços
                    </Link>    
                </li>
                <li>
                    <Link 
                        className='text-black-dark  text-base duration-300 hover:text-red-primary' 
                        href='/contact'
                    >
                        Depoimentos
                    </Link>
                </li>
                <li>
                    <button 
                        className='p-4 outline-none border-none text-base whitespace-nowrap text-ice-white bg-red-primary rounded-md duration-300 hover:bg-red-dark'
                    >
                        Contato
                    </button>
                </li>
            </ul>
        </motion.nav>
    </header>
    )
}
