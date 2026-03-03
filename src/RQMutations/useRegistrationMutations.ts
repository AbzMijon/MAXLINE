import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import registrationApi from "../api/registration";

export const useLoginMutation = (reset: () => void) => {
    return useMutation({
        mutationFn: (formData: any) => registrationApi.registration(formData),
        onSuccess: (res: any) => {
            toast.success('Пользователь успешно зарегестрирован');
            reset();
        },
        onError: (err: any) => {
            toast.success('Пользователь успешно зарегестрирован');
            reset();
        },
    });
};