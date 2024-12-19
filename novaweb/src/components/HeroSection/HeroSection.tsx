export const HeroSection = () => {
  return (
    <div className='bg-background-image relative flex min-h-screen items-center justify-center bg-cover bg-center'>
      <div className='absolute top-40 flex flex-col items-center justify-center px-4'>
        <h1 className='text-[5rem] font-black text-white sm:text-[8rem] md:text-[12rem] lg:text-[15rem] xl:text-[20rem]'>
          n0vaWeb
        </h1>
        <h1 className='-mt-4 self-end text-[2.5rem] font-black text-white sm:-mt-8 sm:text-[4rem] md:-mt-12 md:text-[6rem] lg:-mt-14 lg:text-[8rem] xl:-mt-16 xl:text-[10rem]'>
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
