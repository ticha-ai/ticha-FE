import axios, { AxiosResponse } from 'axios';

export const apiV1 = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});

interface LoginRequestProps {
  code: string;
}

interface LoginResponseProps {
  user: {
    id: string;
    name: string;
    email: string;
  };
  access_token: string;
  refresh_token: string;
}

export const kakaoLogin = async ({
  code,
}: LoginRequestProps): Promise<AxiosResponse<LoginResponseProps>> => {
  console.log(code);
  return apiV1.get('/oauth/kakao/login', {
    params: {
      code,
    },
  });
};
