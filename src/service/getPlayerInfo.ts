import { getPlayerInfo } from './wosApiServices';

import { gameIds } from '@/config/gameIds';

export default async function fetchAllPlayers() {
  const results = await Promise.all(gameIds.map((id) => getPlayerInfo(id)));

  const players = results.filter((r) => r.data !== null).map((r) => r.data!);

  return players;
}
