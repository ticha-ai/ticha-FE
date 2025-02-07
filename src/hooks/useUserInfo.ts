import { create } from 'zustand';

interface UserInfoProps {
  id: string;
  name: string;
  email: string;
  profile_image: string;
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
  profile_image: '',
};

const useUserInfo = create<UserInfoState & UserInfoActions>((set) => ({
  userInfo: defaultState,
  setUserInfo: (userInfo: UserInfoProps) => {
    set({
      userInfo: {
        id: userInfo.id,
        name: userInfo.name,
        email: userInfo.email,
        profile_image: userInfo.profile_image,
      },
    });
  },
  clearUserInfo: () => {
    set({ userInfo: defaultState });
  },
}));

export default useUserInfo;
