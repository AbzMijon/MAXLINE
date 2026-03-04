import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import registrationApi from "../api/registration";
import { useRegistrationStore } from "../store/registrationStore";

export const useLoginMutation = (reset: () => void) => {

    const { setUser } = useRegistrationStore();

    return useMutation({
        mutationFn: (formData: any) => registrationApi.registration(formData),
        onSuccess: (res: any) => {
            setUser(res.data);
            toast.success('Пользователь успешно зарегестрирован');
            reset();
        },
        onError: (err: any) => {
            toast.success('Пользователь успешно зарегестрирован');
            reset();
        },
    });
};