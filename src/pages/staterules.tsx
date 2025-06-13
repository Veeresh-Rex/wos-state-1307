export default function StateRules() {
  return (
    <section className='bg-dark mb-20' id='rules'>
      <div className='text-center mb-16 mt-20'>
        <h2 className='text-4xl font-bold mb-4 font-title glow-text'>
          STATE RULES
        </h2>
        <div className='w-24 h-1 bg-primary mx-auto mb-8' />
      </div>

      <div className='flex justify-center items-center justify-items-center'>
        <div className='frost-glass p-8 rounded-lg glow-border'>
          <h3 className='text-3xl font-bold mb-6 text-primary font-title'>
            Brothers In Arms Rules
          </h3>
          <p className='text-lg'>
            <i className='fa-solid fa-hand-point-right'></i> NO ATTACKS on
            gathering tiles
          </p>
          <p className='text-lg'>
            <i className='fa-solid fa-hand-point-right'></i> Max 2 hits per city
            for NAP6, their academies & FRM
          </p>
          <p className='text-lg'>
            <i className='fa-solid fa-hand-point-right'></i> Don’t attack
            banners or HQ
          </p>
          <p className='text-lg'>
            <i className='fa-solid fa-hand-point-right'></i> Bubble or die
          </p>
          <p className='text-lg'>
            <i className='fa-solid fa-hand-point-right'></i> Do not ZERO cities
          </p>
          <p className='text-lg'>
            <i className='fa-solid fa-hand-point-right'></i> No City attacks
            during events (Bear, Forts, etc)
          </p>
        </div>
      </div>
    </section>
  );
}
