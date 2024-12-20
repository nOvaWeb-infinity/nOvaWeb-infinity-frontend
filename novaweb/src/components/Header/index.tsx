'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaEnvelope, FaHome, FaInfoCircle, FaPhone, FaServicestack, FaTools, FaUsers } from 'react-icons/fa'

import { NavItem } from './components/NavItem'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1000)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed z-10 flex w-full items-center justify-between py-6 pl-16 pr-12 transition-colors duration-300 ${
        isScrolled ? 'bg-blue-400 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='flex items-center'>
        <Image
          width={120}
          height={120}
          src={isScrolled ? '/logo-circle.png' : '/logo-circle-black01.png'}
          alt='nova web logo'
        />
      </div>
      <ul className='flex flex-wrap justify-end space-x-2 text-white'>
        <NavItem href='/sobre-nosotros' icon={<FaUsers />} label='Sobre Nosotros' />
        <NavItem href='/servicios' icon={<FaTools />} label='Servicios' />
        <NavItem href='/contacto' icon={<FaEnvelope />} label='Contacto' />
      </ul>
    </header>
  )
}
