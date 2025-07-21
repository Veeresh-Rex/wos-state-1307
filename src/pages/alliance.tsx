import AllianceCard from '@/components/allianceCard';

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
          <AllianceCard
            sortCode='DRS'
            name='DarkStar'
            description='Elite strike force specializing in rapid assaults across frozen terrain. Known for their coordinated pack tactics.'
            cjTime='15 UTC'
            bearTime='14/18 UTC'
            foundryTime='14 /19 UTC'
            canyonTime='14 /19 UTC'
            members='97'
            powerRank='#1 with 20B+ Power'
          />

          <AllianceCard
            sortCode='DRK'
            name='DARKNESS'
            description='Fearless warriors who thrive in the coldest conditions. Specialists in breaking enemy fortifications.'
            cjTime='-'
            bearTime='-'
            foundryTime='-'
            canyonTime='-'
            members='100'
            powerRank='#2 with 20B+ Power'
          />

          <AllianceCard
            sortCode='SAN'
            name='SANTUARY'
            description='Stealth specialists who excel at reconnaissance and ambush tactics in snowy conditions.'
            cjTime='20 UTC'
            bearTime='20:05 / 00:35 UTC'
            foundryTime='Depeneds on Vote'
            canyonTime='Depeneds on Vote'
            members='79'
            powerRank='#4 with 9B+ Power'
          />
        </div>
      </div>
    </section>
  );
}
