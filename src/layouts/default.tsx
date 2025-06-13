import { Link } from '@heroui/link';
import Snowfall from 'react-snowfall';
import { Navbar } from '@/components/navbar';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-dark min-h-screen text-white'>
      <Navbar />
      <Snowfall
        snowflakeCount={150}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 50,
        }}
        color='#ffffff'
      />
      <main className=''>{children}</main>
      <footer className='w-full flex items-center justify-center py-3'>
        <Link
          isExternal
          className='flex items-center gap-1 text-current'
          title='heroui.com homepage'>
          <span>Created by</span>
          <p className='text-primary'>[DRS]Animal</p>
        </Link>
      </footer>
    </div>
  );
}
