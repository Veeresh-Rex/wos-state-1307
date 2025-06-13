import { useState, useEffect } from 'react';

export default function StateOverview() {
  const [daysDiff, setDaysDiff] = useState<number>(0);

  useEffect(() => {
    const targetDate: Date = new Date('2024-06-09');
    const today: Date = new Date();

    const diffInMs: number = today.getTime() - targetDate.getTime();
    const diffInDays: number = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    setDaysDiff(diffInDays);
  }, []);

  return (
    <section className='bg-dark' id='overview'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold mb-4 font-title glow-text'>
          STATE OVERVIEW
        </h2>
        <div className='w-24 h-1 bg-primary mx-auto mb-8' />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
        <div className='frost-glass p-8 rounded-lg glow-border'>
          <h3 className='text-3xl font-bold mb-6 text-primary font-title'>
            Welcome to State 1307
          </h3>
          <p className='text-lg mb-6'>
            In the whiteout survival State 1307 has risen as a beacon of power
            and unity. Our state has conquered the harshest battlefields and
            emerged victorious against all odds.
          </p>

          <p className='text-lg mb-6'>
            With over 500+ active warriors and 6 powerful alliances.
          </p>

          <div className='space-y-4 mt-8'>
            <div>
              <div className='flex justify-between mb-1'>
                <span>SvS Vicitoris</span>
                <span>
                  <i className='fas fa-star mr-1 text-yellow-400' />
                  <i className='fas fa-star mr-1 text-yellow-400' />
                  <i className='fas fa-star mr-1 text-yellow-400' />
                  <i className='fas fa-star mr-1 text-yellow-400' />
                  <i className='fas fa-star mr-1 text-yellow-400' />
                  <i className='fas fa-star mr-1 text-yellow-400' />
                </span>
              </div>
            </div>

            <div>
              <div className='flex justify-between mb-1'>
                <span>Created Date</span>
                <span>09/06/2024 - 17:45:03 UTC</span>
              </div>
            </div>

            <div>
              <div className='flex justify-between mb-1'>
                <span>Server Age</span>
                <span>{daysDiff} days</span>
              </div>
            </div>
            <div>
              <div className='flex justify-between mb-1'>
                <span>Server Gen</span>
                <span>6th</span>
              </div>
            </div>
          </div>
        </div>

        <div className='relative'>
          <div className='hexagon aspect-square w-full max-w-md mx-auto p-1'>
            <div className='w-full h-full bg-dark-darker flex items-center justify-center p-8'>
              <svg
                className='w-full h-full'
                viewBox='0 0 200 200'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M47.7,-57.2C59.5,-45.9,65.8,-29.7,68.2,-13.1C70.6,3.6,69.1,20.6,61.1,34.4C53.1,48.1,38.6,58.5,22.7,64.5C6.8,70.5,-10.5,72.1,-25.2,66.5C-39.9,60.9,-52,48.1,-60.1,33.2C-68.2,18.3,-72.3,1.3,-68.9,-13.8C-65.5,-28.9,-54.6,-42.1,-41.5,-53C-28.4,-63.9,-14.2,-72.5,1.3,-74C16.8,-75.6,33.5,-70.1,47.7,-57.2Z'
                  fill='#4a9eff'
                  transform='translate(100 100)'
                />
                <text
                  dominantBaseline='middle'
                  fill='white'
                  fontFamily='Orbitron'
                  fontSize='24'
                  fontWeight='bold'
                  textAnchor='middle'
                  x='50%'
                  y='50%'>
                  STATE 1307
                </text>
                <text
                  dominantBaseline='middle'
                  fill='white'
                  fontFamily='Rajdhani'
                  fontSize='14'
                  textAnchor='middle'
                  x='50%'
                  y='65%'>
                  WHITEOUT SURVIVAL
                </text>
              </svg>
            </div>
          </div>

          <div className='absolute -bottom-10 -left-10 w-16 h-16 hexagon bg-secondary/20 -z-10' />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16'>
        <div className='frost-glass p-6 rounded-lg text-center'>
          <div className='w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4'>
            <i className='fas fa-trophy text-3xl text-primary' />
          </div>
          <h4 className='text-xl font-bold mb-2 font-title'>6 SvS Victories</h4>
          <p>
            Undefeated in the last 6 SvS wars across the winter battlefield.
          </p>
        </div>

        <div className='frost-glass p-6 rounded-lg text-center'>
          <div className='w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4'>
            <i className='fas fa-users text-3xl text-primary' />
          </div>
          <h4 className='text-xl font-bold mb-2 font-title'>
            500+ Active Warriors
          </h4>
          <p>
            Our ranks grow stronger each day with dedicated fighters from across
            the realm.
          </p>
        </div>

        <div className='frost-glass p-6 rounded-lg text-center'>
          <div className='w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4'>
            <i className='fas fa-shield-alt text-3xl text-primary' />
          </div>
          <h4 className='text-xl font-bold mb-2 font-title'>
            6 Powerfull Alliance
          </h4>
          <p>
            Dominating the strategic resources and key positions across the
            battlefield.
          </p>
        </div>
      </div>
    </section>
  );
}
