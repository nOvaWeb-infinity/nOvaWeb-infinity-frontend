import Image from 'next/image'

export const PhilosophySection = () => {
  return (
    <section
      id='nuestra-filosofia'
      className='flex flex-col py-16 lg:flex-row lg:space-x-8 lg:space-y-0 lg:py-24 xl:py-32'
    >
      <div className='w-full self-center px-16 lg:w-1/2'>
        <h2 className='mb-10 text-6xl font-bold'>Nuestra Filosofía</h2>
        <p className='mb-4 text-2xl'>
          En Novaweb Infinity creemos que cada proyecto es único, al igual que cada cliente. Nos apasiona crear
          soluciones personalizadas porque entendemos que no existen dos negocios iguales. Nos esforzamos por escuchar,
          entender y transformar tus ideas en aplicaciones web que realmente aporten valor a tu empresa.
        </p>
        <p className='mb-4 text-2xl'>
          Nuestra meta no es solo desarrollar tecnología, sino construir experiencias digitales que impulsen tu
          crecimiento y te conecten de manera auténtica con tus usuarios. Innovación, calidad y compromiso son los
          pilares que nos guían, asegurando que cada línea de código refleje nuestra dedicación a tu éxito.
        </p>
        <p className='mb-4 text-2xl'>
          En Novaweb Infinity, tu visión es nuestra inspiración. Juntos, llevamos tus ideas más allá del infinito.
        </p>
      </div>
      <div className='flex w-full justify-center px-16 lg:w-1/2 lg:justify-end'>
        <Image
          src='/ian.jpg'
          alt='Nuestra Filosofía'
          width={800}
          height={400}
          className='rounded-lg object-cover shadow-lg'
        />
      </div>
    </section>
  )
}
