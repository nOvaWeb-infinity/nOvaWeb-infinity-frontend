import Image from 'next/image'
import { FaHome, FaInfoCircle, FaPhone } from 'react-icons/fa'

import { NavItem } from './components/NavItem'

export const Header = () => {
  return (
    <header className='flex justify-between items-center p-3 px-12 bg-background border-b'>
      <div className='flex items-center'>
        <Image width={90} height={90} src='/logo-circle.png' alt='nova web logo' />
      </div>
      <ul className='flex flex-wrap justify-end'>
        <NavItem href='/sobre-nosotros' icon={<FaInfoCircle className='w-5 h-5' />} label='Sobre Nosotros' />
        <NavItem href='/servicios' icon={<FaHome className='w-5 h-5' />} label='Servicios' />
        <NavItem href='/contacto' icon={<FaPhone className='w-5 h-5' />} label='Contacto' />
      </ul>
    </header>
  )
}
