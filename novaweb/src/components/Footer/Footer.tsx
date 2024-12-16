import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

import { novaWeb } from '@/app/constants/constants'
import { CustomLink } from '@/components/Footer/components/CustomLink'
import { Separator } from '@/components/ui/separator'

export const Footer = () => {
  return (
    <footer className='bg-primary mt-auto'>
      <div className='mx-auto px-12 py-5'>
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
          <div className='flex items-center space-x-2'>
            <Image width={150} height={150} src='/logo-circle.png' alt='nova web logo' />
          </div>
          <div className='flex space-x-4'>
            <CustomLink href='https://facebook.com' icon={FaFacebookF} label='Facebook' />
            <CustomLink href='https://instagram.com' icon={FaInstagram} label='Instagram' />
            <CustomLink href='https://linkedin.com' icon={FaLinkedinIn} label='LinkedIn' />
          </div>
        </div>
        <Separator className='my-4' />
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
          <div className='flex gap-4 text-sm '>
            <CustomLink href='#' label='Terms of service' />
            <CustomLink href='#' label='Privacy Policy' />
            <CustomLink href='#' label='Cookie Policy' />
          </div>
          <p className='text-center text-sm  text-white'>
            © {new Date().getFullYear()} {novaWeb}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
