import { Info, UserPlus } from 'lucide-react';
import { Button } from '@heroui/button';

export default function Homepage() {
  return (
    <section className='relative pt-64 pb-20 px-4 text-white'>
      <div className='container mx-auto text-center relative z-10'>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 font-title glow-text'>
          WOS STATE 1307
        </h1>
        <p className='text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100'>
          United we stand, divided we fall. One of the strongest state in the Whiteout Survival.
        </p>
        <div className='flex justify-center space-x-4'>
          <Button
            className='bg-primary hover:bg-blue-600 text-white font-bold py-6 px-8 rounded-md transition-all duration-300 flex items-center'
            startContent={<UserPlus />}>
            Join Alliance
          </Button>
          <Button
            className='bg-transparent border border-primary text-primary hover:bg-primary/10 font-bold py-6 px-8 rounded-md transition-all duration-300 flex items-center'
            startContent={<Info />}>
            More Info
          </Button>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark to-transparent' />
    </section>
  );
}
