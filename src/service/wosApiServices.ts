import axios from 'axios';

import CryptoJS from "crypto-js";

export async function getPlayerInfo(
  gameId: string
): Promise<ApiResponse<PlayerApiResponse>> {
  try {
    const secret = 'tB87#kPtkxqOS2';
    const time = Date.now();

    let form = `fid=${gameId}&time=${time}`;

    form = `sign=${CryptoJS.MD5(form + secret).toString()}&` + form;

    const response = await axios.post<PlayerApiResponse>(
      'https://wos-giftcode-api.centurygame.com/api/player',
      form,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    return {
      data: response.data,
      error: null,
      status: response.status,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        data: null,
        error: error.response?.data?.msg || error.message,
        status: error.response?.status || 500,
      };
    }

    return {
      data: null,
      error: (error as Error).message,
      status: 500,
    };
  }
}

export interface PlayerApiResponse {
  code: number;
  data: {
    fid: number;
    nickname: string;
    kid: number;
    stove_lv: number;
    stove_lv_content: string;
    avatar_image: string;
    total_recharge_amount: number;
  };
  msg: string;
  err_code: string;
}

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  status: number;
}
