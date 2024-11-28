import { FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
    {
        icon: <FaFacebook/>,
        label: 'Facebook',
        link: 'https://www.facebook.com/LucasDmayo',
    },
    {
        icon: <FaInstagram/>,
        label: 'Instagram',
        link: 'https://www.instagram.com/luccarsconcesionariaydetailing',
    },
]

export default function Footer() {
  return (
    <div className='bg-black py-20 text-white border-t-2 border-t-brand-green'>
        <div className='responsive my-10 px-10'>
            <h4 className='uppercase' >Redes</h4>
            <div className='space-y-2'>
                {
                    socials.map((i) => 
                        <a className='flex space-x-2 items-center cursor-pointer' href={i.link}>
                            {i.icon}
                            <p>{i.label}</p>
                        </a>
                    )
                }
            </div>
        </div>
        <div className='flex justify-center'>
            <img src='/brand-logo.png' height={20} width={80}></img>
        </div>
    </div>
  )
}
