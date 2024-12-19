export const HeroSection = () => {
  return (
    <div className='bg-background-image relative flex min-h-screen items-center justify-center bg-cover bg-center'>
      <div className='flex flex-col items-center justify-center px-4'>
        <h1 className='text-5xl font-black text-white sm:text-7xl md:text-9xl lg:text-[12rem] xl:text-[15rem]'>
          n0vaWeb
        </h1>
        <h1 className='mt-4 text-3xl font-black text-white sm:mt-6 sm:text-5xl md:mt-8 md:text-7xl lg:mt-12 lg:text-[8rem] xl:mt-16 xl:text-[10rem]'>
          infinity
        </h1>
      </div>

      <div className='absolute bottom-10 px-4 text-center'>
        <p className='text-xl font-black tracking-widest text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
          Tu socio en innovación digital
        </p>
      </div>
    </div>
  )
}
