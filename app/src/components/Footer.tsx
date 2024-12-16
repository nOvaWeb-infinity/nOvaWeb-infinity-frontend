import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

import { novaWeb } from '@/app/constants/constants'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className='bg-primary mt-auto'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
          <div className='flex items-center space-x-2'>
            <img className='w-36 ' src='/logo-circle.png' alt='nova web logo' />
          </div>
          <nav className='flex space-x-4'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className=' hover:text-primary'>
              <FaFacebookF className='size-6 text-white' />
              <span className='sr-only'>Facebook</span>
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className=' hover:text-primary'>
              <FaTwitter className='size-6 text-white' />
              <span className='sr-only'>Twitter</span>
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className=' hover:text-primary'>
              <FaInstagram className='size-6 text-white' />
              <span className='sr-only'>Instagram</span>
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className=' hover:text-primary'>
              <FaLinkedinIn className='size-6 text-white' />
              <span className='sr-only'>LinkedIn</span>
            </a>
          </nav>
        </div>
        <Separator className='my-4' />
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
          <p className='text-center text-sm  text-white'>
            © {new Date().getFullYear()} {novaWeb}. All rights reserved.
          </p>
          <nav className='flex gap-4 text-sm '>
            <a href='#' className='hover:underline text-white'>
              Terms of Service
            </a>
            <a href='#' className='hover:underline text-white'>
              Privacy Policy
            </a>
            <a href='#' className='hover:underline text-white'>
              Cookie Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
