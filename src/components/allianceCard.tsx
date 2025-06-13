import { BowArrow, Flame, Panda, Swords } from 'lucide-react';

type RecordItem = {
  sortCode: string;
  name: string;
  description: string;
  cjTime: string;
  foundryTime: string;
  bearTime: string;
  canyonTime: string;
  powerRank: string;
  members: string;
};

const AllianceCard: React.FC<RecordItem> = ({
  sortCode,
  name,
  description,
  cjTime,
  foundryTime,
  bearTime,
  canyonTime,
  members,
  powerRank,
}) => {
  return (
    <div className='frost-glass rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/30'>
      <div className='h-3 bg-gradient-to-r from-primary to-secondary'></div>
      <div className='p-6'>
        <div className='flex items-center mb-4'>
          <div className='hexagon w-12 h-12 flex items-center justify-center mr-3'>
            <span className='text-primary font-bold'>{sortCode}</span>
          </div>
          <h3 className='text-xl font-bold font-title'>{name}</h3>
        </div>
        <p className='mb-4'>{description}</p>
        <p className='mb-4 flex items-center gap-2'>
          <Flame size={20} />
          <span>Crazy Joy: {cjTime}</span>
        </p>
        <p className='mb-4 flex items-center gap-2'>
          <Panda size={20} />
          <span>Bear: {bearTime}</span>
        </p>

        <p className='mb-4 flex items-center gap-2'>
          <Swords size={20} />
          <span>Foundry: {foundryTime}</span>
        </p>

        <p className='mb-4 flex items-center gap-2'>
          <BowArrow size={20} />
          <span>Canyon Clash: {canyonTime}</span>
        </p>
        <div className='flex justify-between text-sm'>
          <span>
            <i className='fas fa-user mr-1'></i> {members} Members
          </span>
          <span>
            <i className='fas fa-star mr-1 text-yellow-400'></i> Power Rank:
            {powerRank}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AllianceCard;
