import { BowArrow, Flame, Panda, Swords } from 'lucide-react';

export default function AlliancePage() {
  return (
    <section id='alliances' className='py-20 px-4 bg-dark-darker relative'>
      <div className='container mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4 font-title glow-text'>
            ALLIANCE OVERVIEW
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-8'></div>
          <p className='max-w-2xl mx-auto text-lg'>
            Our strength comes from unity. Each clan brings unique abilities and
            strategies to our alliance.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='frost-glass rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30'>
            <div className='h-3 bg-gradient-to-r from-primary to-secondary'></div>
            <div className='p-6'>
              <div className='flex items-center mb-4'>
                <div className='hexagon w-12 h-12 flex items-center justify-center mr-3'>
                  <span className='text-primary font-bold'>DRS</span>
                </div>
                <h3 className='text-xl font-bold font-title'>DarkStar</h3>
              </div>
              <p className='mb-4'>
                Elite strike force specializing in rapid assaults across frozen
                terrain. Known for their coordinated pack tactics.
              </p>
              <p className='mb-4 flex items-center gap-2'>
                <Flame size={20} />
                <span>Crazy Joy: 15 UTC</span>
              </p>
              <p className='mb-4 flex items-center gap-2'>
                <Panda size={20} />
                <span>Bear: 14/18 UTC</span>
              </p>

              <p className='mb-4 flex items-center gap-2'>
                <Swords size={20} />
                <span>Foundry: 14 /19 UTC</span>
              </p>

              <p className='mb-4 flex items-center gap-2'>
                <BowArrow size={20} />
                <span>Canyon Clash: 14 /19 UTC</span>
              </p>

              <div className='flex justify-between text-sm'>
                <span>
                  <i className='fas fa-user mr-1'></i> 97 Members
                </span>
                <span>
                  <i className='fas fa-star mr-1 text-yellow-400'></i> Power
                  Rank: #1 with 20B+ Power
                </span>
              </div>
            </div>
          </div>

          <div className='frost-glass rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30'>
            <div className='h-3 bg-gradient-to-r from-primary to-secondary'></div>
            <div className='p-6'>
              <div className='flex items-center mb-4'>
                <div className='hexagon w-12 h-12 flex items-center justify-center mr-3'>
                  <span className='text-primary font-bold'>DRK</span>
                </div>
                <h3 className='text-xl font-bold font-title'>DARKNESS</h3>
              </div>
              <p className='mb-4'>
                Fearless warriors who thrive in the coldest conditions.
                Specialists in breaking enemy fortifications.
              </p>
                  <p className='mb-4 flex items-center gap-2'>
                <Flame size={20} />
                <span>Crazy Joy: -</span>
              </p>
              <p className='mb-4 flex items-center gap-2'>
                <Panda size={20} />
                <span>Bear: -</span>
              </p>

              <p className='mb-4 flex items-center gap-2'>
                <Swords size={20} />
                <span>Foundry: -</span>
              </p>

              <p className='mb-4 flex items-center gap-2'>
                <BowArrow size={20} />
                <span>Canyon Clash: -</span>
              </p>
              <div className='flex justify-between text-sm'>
                <span>
                  <i className='fas fa-user mr-1'></i> 100 Members
                </span>
                <span>
                  <i className='fas fa-star mr-1 text-yellow-400'></i> Power
                  Rank: #2 with 20B+ Power
                </span>
              </div>
            </div>
          </div>

          <div className='frost-glass rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30'>
            <div className='h-3 bg-gradient-to-r from-primary to-secondary'></div>
            <div className='p-6'>
              <div className='flex items-center mb-4'>
                <div className='hexagon w-12 h-12 flex items-center justify-center mr-3'>
                  <span className='text-primary font-bold'>ONE</span>
                </div>
                <h3 className='text-xl font-bold font-title'>WeAreONE</h3>
              </div>
              <p className='mb-4'>
                Masters of defensive strategy, protecting our territories during
                the harshest blizzards.
              </p>
                  <p className='mb-4 flex items-center gap-2'>
                <Flame size={20} />
                <span>Crazy Joy: -</span>
              </p>
              <p className='mb-4 flex items-center gap-2'>
                <Panda size={20} />
                <span>Bear: -</span>
              </p>

              <p className='mb-4 flex items-center gap-2'>
                <Swords size={20} />
                <span>Foundry: -</span>
              </p>

              <p className='mb-4 flex items-center gap-2'>
                <BowArrow size={20} />
                <span>Canyon Clash: -</span>
              </p>
              <div className='flex justify-between text-sm'>
                <span>
                  <i className='fas fa-user mr-1'></i> 72 Members
                </span>
                <span>
                  <i className='fas fa-star mr-1 text-yellow-400'></i> Power
                  Rank: #3 with 11B+ Power
                </span>
              </div>
            </div>
          </div>

          <div className='frost-glass rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30'>
            <div className='h-3 bg-gradient-to-r from-primary to-secondary'></div>
            <div className='p-6'>
              <div className='flex items-center mb-4'>
                <div className='hexagon w-12 h-12 flex items-center justify-center mr-3'>
                  <span className='text-primary font-bold'>SAN</span>
                </div>
                <h3 className='text-xl font-bold font-title'>SANTUARY</h3>
              </div>
              <p className='mb-4'>
                Stealth specialists who excel at reconnaissance and ambush
                tactics in snowy conditions.
              </p>
                  <p className='mb-4 flex items-center gap-2'>
                <Flame size={20} />
                <span>Crazy Joy: -</span>
              </p>
              <p className='mb-4 flex items-center gap-2'>
                <Panda size={20} />
                <span>Bear: -</span>
              </p>

              <p className='mb-4 flex items-center gap-2'>
                <Swords size={20} />
                <span>Foundry: -</span>
              </p>

              <p className='mb-4 flex items-center gap-2'>
                <BowArrow size={20} />
                <span>Canyon Clash: -</span>
              </p>
              <div className='flex justify-between text-sm'>
                <span>
                  <i className='fas fa-user mr-1'></i> 79 Members
                </span>
                <span>
                  <i className='fas fa-star mr-1 text-yellow-400'></i> Power
                  Rank: #4 with 9B+ Power
                </span>
              </div>
            </div>
          </div>

          <div className='frost-glass rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30'>
            <div className='h-3 bg-gradient-to-r from-primary to-secondary'></div>
            <div className='p-6'>
              <div className='flex items-center mb-4'>
                <div className='hexagon w-12 h-12 flex items-center justify-center mr-3'>
                  <span className='text-primary font-bold'>MSF</span>
                </div>
                <h3 className='text-xl font-bold font-title'>MISFITS</h3>
              </div>
              <p className='mb-4'>
                Close-combat specialists with unmatched skill in winter warfare
                and resource acquisition.
              </p>
                  <p className='mb-4 flex items-center gap-2'>
                <Flame size={20} />
                <span>Crazy Joy: -</span>
              </p>
              <p className='mb-4 flex items-center gap-2'>
                <Panda size={20} />
                <span>Bear: -</span>
              </p>

              <p className='mb-4 flex items-center gap-2'>
                <Swords size={20} />
                <span>Foundry: -</span>
              </p>

              <p className='mb-4 flex items-center gap-2'>
                <BowArrow size={20} />
                <span>Canyon Clash: -</span>
              </p>
              <div className='flex justify-between text-sm'>
                <span>
                  <i className='fas fa-user mr-1'></i> 54 Members
                </span>
                <span>
                  <i className='fas fa-star mr-1 text-yellow-400'></i> Power
                  Rank: #5 with 8B+ Power
                </span>
              </div>
            </div>
          </div>

          <div className='frost-glass rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30'>
            <div className='h-3 bg-gradient-to-r from-primary to-secondary'></div>
            <div className='p-6'>
              <div className='flex items-center mb-4'>
                <div className='hexagon w-12 h-12 flex items-center justify-center mr-3'>
                  <span className='text-primary font-bold'>GER</span>
                </div>
                <h3 className='text-xl font-bold font-title'>Irrenhaus</h3>
              </div>
              <p className='mb-4'>
                Strategic thinkers and tacticians who coordinate our
                alliance&apos;s movements across the battlefield.
              </p>
                  <p className='mb-4 flex items-center gap-2'>
                <Flame size={20} />
                <span>Crazy Joy: -</span>
              </p>
              <p className='mb-4 flex items-center gap-2'>
                <Panda size={20} />
                <span>Bear: -</span>
              </p>

              <p className='mb-4 flex items-center gap-2'>
                <Swords size={20} />
                <span>Foundry: -</span>
              </p>

              <p className='mb-4 flex items-center gap-2'>
                <BowArrow size={20} />
                <span>Canyon Clash: -</span>
              </p>
              <div className='flex justify-between text-sm'>
                <span>
                  <i className='fas fa-user mr-1'></i> 57 Members
                </span>
                <span>
                  <i className='fas fa-star mr-1 text-yellow-400'></i> Power
                  Rank: #6 with 7B+ Power
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
