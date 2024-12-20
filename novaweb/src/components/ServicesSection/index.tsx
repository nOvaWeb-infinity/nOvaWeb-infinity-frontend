import { FaCode, FaCogs, FaLaptopCode, FaPalette } from 'react-icons/fa'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const ServicesSection = () => {
  const services = [
    {
      icon: <FaCode className='text-4xl text-blue-400' />,
      title: 'Desarrollo Web Estático',
      description: 'Creamos sitios web estáticos personalizados para lanzar y posicionar tu marca.',
    },
    {
      icon: <FaLaptopCode className='text-4xl text-blue-400' />,
      title: 'Aplicaciones Web',
      description: 'Desarrollamos plataformas web dinámicas y escalables para tus necesidades empresariales.',
    },
    {
      icon: <FaPalette className='text-4xl text-blue-400' />,
      title: 'Diseño UI/UX',
      description: 'Diseñamos experiencias digitales intuitivas y atractivas para tus usuarios.',
    },
    {
      icon: <FaCogs className='text-4xl text-blue-400' />,
      title: 'Mantenimiento Web',
      description: 'Nos aseguramos de que tu sitio web funcione perfectamente en todo momento.',
    },
  ]

  return (
    <section className='bg-gray-100 py-32'>
      <div className='mx-auto max-w-7xl px-6 text-center'>
        <h2 className='text-6xl font-bold text-gray-800'>Nuestros Servicios</h2>
        <p className='mt-4 text-3xl text-gray-600'>
          Soluciones diseñadas para transformar tus ideas en realidades digitales.
        </p>
        <div className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2'>
          {services.map((service, index) => (
            <Card
              key={index}
              className='h-full w-full rounded-lg border bg-white p-8 shadow-md transition-shadow hover:shadow-lg'
            >
              <CardHeader className='flex flex-col items-center'>
                <div className='mb-4'>{service.icon}</div>
                <CardTitle className='text-3xl font-semibold text-gray-800'>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-2xl text-gray-600'>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
