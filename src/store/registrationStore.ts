import { create, StateCreator } from 'zustand';

interface IUser {
    phone: string;
    password: string;
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

// Я не придумал куда в тестовом задании можно логически всунуть использования Zustand поэтому оставлю это тут как банальный пример store для юзера