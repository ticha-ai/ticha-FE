import { create } from 'zustand';

interface UserInfoProps {
  id: string;
  name: string;
  email: string;
}

interface UserInfoState {
  userInfo: UserInfoProps;
}

interface UserInfoActions {
  setUserInfo: (userInfo: UserInfoProps) => void;
  clearUserInfo: () => void;
}

const defaultState: UserInfoProps = {
  id: '',
  name: '',
  email: '',
};

const useUserInfo = create<UserInfoState & UserInfoActions>((set) => ({
  userInfo: defaultState,
  setUserInfo: (userInfo: UserInfoProps) => {
    set({ userInfo });
  },
  clearUserInfo: () => {
    set({ userInfo: defaultState });
  },
}));

export default useUserInfo;
