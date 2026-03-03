import { create, StateCreator } from 'zustand';

interface IUser {
    id: number;
    username: string;
}

type registrationState = {
    user: IUser | null;
    setUser: (user: IUser) => void;
};

const registrationStore: StateCreator<registrationState> = (set, get) => ({
    user: null,
    setUser: (user: IUser) =>
        set(() => ({
            user: user,
        })),
});

export const useRegistrationStore = create(registrationStore);