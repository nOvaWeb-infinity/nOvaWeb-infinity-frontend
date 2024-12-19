import Image from 'next/image'
import { FaEnvelope, FaHome, FaInfoCircle, FaPhone, FaServicestack, FaTools, FaUsers } from 'react-icons/fa'

import { NavItem } from './components/NavItem'

export const Header = () => {
  return (
    <header className='fixed z-10 flex w-full items-center justify-between py-6 pl-16 pr-12'>
      <div className='flex items-center'>
        <Image width={120} height={120} src='/logo-circle-black01.png' alt='nova web logo' />
      </div>
      <ul className='flex flex-wrap justify-end space-x-2 text-white'>
        <NavItem href='/sobre-nosotros' icon={<FaUsers />} label='Sobre Nosotros' />
        <NavItem href='/servicios' icon={<FaTools />} label='Servicios' />
        <NavItem href='/contacto' icon={<FaEnvelope />} label='Contacto' />
      </ul>
    </header>
  )
}
