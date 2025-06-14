import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@heroui/table';
import React, { useEffect, useState } from 'react';

import fetchAllPlayers from '@/service/getPlayerInfo';
import { PlayerApiResponse } from '@/service/wosApiServices';
export const columns = [
  { name: 'ID', uid: 'id' },
  { name: 'NAME', uid: 'name' },
  { name: 'FURNACE', uid: 'furnace' },
];

export default function Members() {
  const [users, setUsers] = useState<PlayerApiResponse[]>([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const players = await fetchAllPlayers();

      setUsers(players);
    };

    fetchPlayers();
  }, []);

  const renderCell = React.useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case 'id':
        return (
          <div className='flex flex-col'>
            <p className='text-bold text-sm capitalize'>{cellValue}</p>
            <p className='text-bold capitalize'>{user.data.fid}</p>
          </div>
        );
      case 'name':
        return (
          <div className='flex items-center gap-3'>
            <img
              alt={cellValue}
              className='w-10 h-10 rounded-lg object-cover'
              src={user.data.avatar_image}
            />
            <div className='flex flex-col'>
              <span className='font-semibold'>{cellValue}</span>
              <span className=''>{user.data.nickname}</span>
            </div>
          </div>
        );

      case 'furnace':
        return (
          <img
            alt={cellValue}
            className='w-6 h-6 rounded-lg object-cover'
            src={user.data.stove_lv_content}
          />
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <section className='py-20 px-4 bg-dark-darker' id='members'>
      <div className='container mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold mb-4 font-title glow-text'>
            STATE MEMBERS
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-8' />
          <p className='max-w-2xl mx-auto text-lg'>
            Our alliance is built on the strength of every member. Together we
            form an unstoppable force.
          </p>
        </div>
        <Table aria-label='Example table with custom cells' className='w-full'>
          <TableHeader className='bg-dark-darker text-white' columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === 'actions' ? 'center' : 'start'}>
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody className='bg-dark-darker' items={users}>
            {(item) => (
              <TableRow
                key={item.data.fid}
                className='hover:bg-dark-darker transition-colors duration-200'>
                {(columnKey) => (
                  <TableCell className='bg-dark-darker border-t border-primary/20'>
                    {renderCell(item, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
