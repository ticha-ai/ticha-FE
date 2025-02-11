import axios from 'axios';

export const apiV1 = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});
