import { Variants, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

interface HeaderProps {
    isMenuOpen: boolean
    setMenuOpen: Dispatch<SetStateAction<boolean>>
}

interface ItemProps {
    label: string
    href: string
}

const menuVariants: Variants = {
    close: {
        pointerEvents: 'none',
        height: 0,
        opacity: 0,
    },
    open: {
        pointerEvents: 'all',
        height: '100vh',
        opacity: 1,
        transition: {
            delay: 0.8,
        }
    }
}

const circleVariants: Variants = {
    close: {
        r: 65
    },
    open: {
        r: 5000
    }
}


function NavMenu({isMenuOpen}: HeaderProps) {
    const Item = ({label, href}: ItemProps) => <a className='hover:text-brand-green' href={href}>{label}</a>

    return (
        <motion.div 
            className='rounded-md bg-transparent h-screen text-white overflow-hidden text-2xl'
            variants={menuVariants}
            initial='close'
            animate={isMenuOpen ? 'open': 'close'}
            transition={{
                ease: 'easeOut',
            }}
        >
            <div className='flex flex-col p-4'>
                <div className='flex flex-col'>
                    <Item label='Modelos' href='/modelos'/>
                    <Item label='Productos' href='/modelos'/>
                    <Item label='Financiación' href='/financiacion'/>
                </div>
                <div className='w-full my-4 border-2 rounded-md border-brand-green'></div>
                <div className='flex flex-col'>
                    <Item label='Quienes somos' href='/acerca-de'/>
                    <Item label='Contacto' href='/contacto'/>
                    <Item label='Sucursales' href='/sucursales'/>
                </div>
            </div>
        </motion.div>
    )
}

export default function Header({ isMenuOpen, setMenuOpen }: HeaderProps) {

    return (
    <div className={`fixed w-full z-50 backdrop-blur-xl`}
    >
        <div className='w-full px-4 py-3 flex justify-between items-center text-white responsive'>
            <a href='/'>
                <img src='/brand-logo.png' height={20} width={80}></img>
            </a>
            <div className='relative' onClick={() => setMenuOpen((prev) => !prev)}>
                {
                    isMenuOpen ?
                    <HiXMark className='cursor-pointer' size={35} />
                    :
                    <HiBars3 className='cursor-pointer' size={35} />
                }
                <svg viewBox='0 0 100 100' className='absolute top-0 left-0 -z-10 overflow-visible' xmlns="http://www.w3.org/2000/svg">
                    <motion.circle
                        cx='50' cy="50" fill='black'
                        variants={circleVariants}
                        initial='close'
                        animate={isMenuOpen ? 'open': 'close'}
                        transition={{
                            ease: 'easeIn',
                            duration: 0.8,
                        }}
                    />
            </svg>
            </div>
        </div>
        <div>
            <NavMenu isMenuOpen={isMenuOpen}/>
        </div>
    </div>
    )
}
