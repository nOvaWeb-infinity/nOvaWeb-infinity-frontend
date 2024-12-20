import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'

export const PhilosophySection = () => {
  return (
    <section id='philosophy' className='py-16 lg:py-24 xl:py-32'>
      <div className='mx-auto px-6 lg:flex lg:space-x-8'>
        <Card className='w-full !border-0 border-none py-8 pl-0 pr-8 !shadow-none lg:w-1/2 lg:pr-16'>
          <CardContent className='pl-0'>
            <h2 className='mb-10 text-6xl font-bold'>Nuestra Filosofía</h2>
            <p className='mb-4 text-2xl'>
              En Novaweb Infinity creemos que cada proyecto es único, al igual que cada cliente. Nos apasiona crear
              soluciones personalizadas porque entendemos que no existen dos negocios iguales. Nos esforzamos por
              escuchar, entender y transformar tus ideas en aplicaciones web que realmente aporten valor a tu empresa.
            </p>
            <p className='mb-4 text-2xl'>
              Nuestra meta no es solo desarrollar tecnología, sino construir experiencias digitales que impulsen tu
              crecimiento y te conecten de manera auténtica con tus usuarios. Innovación, calidad y compromiso son los
              pilares que nos guían, asegurando que cada línea de código refleje nuestra dedicación a tu éxito.
            </p>
            <p className='mb-4 text-2xl'>
              En Novaweb Infinity, tu visión es nuestra inspiración. Juntos, llevamos tus ideas más allá del infinito.
            </p>
          </CardContent>
        </Card>
        <div className='flex w-full justify-center lg:w-1/2 lg:justify-end'>
          <Image
            src='/ian.jpg'
            alt='Nuestra Filosofía'
            width={1000}
            height={600}
            className='rounded-lg object-cover shadow-lg'
          />
        </div>
      </div>
    </section>
  )
}
