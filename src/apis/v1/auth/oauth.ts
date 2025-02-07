import axios, { AxiosResponse } from 'axios';

export const apiV1 = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});

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
