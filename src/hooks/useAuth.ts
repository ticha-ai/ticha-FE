interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

const useAuth = () => {
  const setTokens = ({ accessToken, refreshToken }: AuthTokens) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  };

  const clearTokens = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  const getAccessToken = (): string | null => {
    return localStorage.getItem('accessToken');
  };

  const getRefreshToken = (): string | null => {
    return localStorage.getItem('refreshToken');
  };

  return { setTokens, clearTokens, getAccessToken, getRefreshToken };
};

export default useAuth;
