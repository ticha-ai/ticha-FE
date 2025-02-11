import { AxiosResponse } from 'axios';

import { apiV1 } from '@/apis/v1/auth/index';

interface LoginRequestProps {
  code: string;
}

interface LoginResponseProps {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
    name: string;
    email: string;
    profile_image: string;
  };
  message: string;
}

export const kakaoLogin = async ({
  code,
}: LoginRequestProps): Promise<AxiosResponse<LoginResponseProps>> => {
  return apiV1.post('/oauth/kakao/token', {
    code,
  });
};
