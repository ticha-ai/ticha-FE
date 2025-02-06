'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { kakaoLogin } from '@/apis/v1/auth/oauth';

// 유저 정보를 저장하는 로직이 필요함
const KakaoAuth = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!code) return;

        const response = await kakaoLogin({ code });
        console.log(response.data);

        // 나중에 로그인을 하면 어떤 페이지로 이동할지 결정이 필요함
        router.replace('/');
      } catch (error) {
        console.warn(error);
      }
    };

    fetchData();
  }, [code]);

  // 추후에 스피너 도입 예정
  return <div>카카오 로그인 진행중...</div>;
};

export default KakaoAuth;
