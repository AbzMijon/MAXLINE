import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../Button/Button';
import styles from './registrForm.module.scss';
import FormInputPass from '../FormInputPass/FormInputPass';
import FormPhoneInput from '../FormPhoneInput/FormPhoneInput';
import { registrationSchema } from '../../../schemas/registrationSchema';
import { useLoginMutation } from '../../../RQMutations/useRegistrationMutations';
import FormCheckbox from '../FormCheckbox/FormCheckbox';

interface FormData {
    phone: string;
    password: string;
    agreement: boolean;
    bonuses: boolean;
}

export default function RegistrForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>({
        resolver: yupResolver(registrationSchema),
        mode: 'onBlur',
    });

    const loginMutation = useLoginMutation(reset);

    const onSubmit: SubmitHandler<FormData> = (data) => {
        loginMutation.mutate(data);
    };

    return (
        <div className={styles.registrForm}>
            <h3 className={styles.registrForm__title}>Регистрация</h3>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.registrForm__form}>
                <div className={styles.registrForm__columns}>
                    <FormPhoneInput<FormData>
                        register={register}
                        name="phone"
                        label="Номер телефона"
                        placeholder="+375"
                        error={errors.phone?.message}
                    />
                    <FormInputPass<FormData>
                        register={register}
                        name="password"
                        label="Пароль"
                        placeholder="Придумайте пароль"
                        error={errors.password?.message}
                    />
                </div>
                <div className={styles.registrForm__columns}>
                    <FormCheckbox<FormData>
                        register={register}
                        name="agreement"
                        label={ <p>Мне больше 21 года. <br /> Я согласен и принимаю <span className={styles.registrForm__checkboxUnderlinedText}>«Правила приема ставок»</span> и <span className={styles.registrForm__checkboxUnderlinedText}>«Политику конциденциальности»</span> </p>  }
                    />
                    <FormCheckbox<FormData>
                        register={register}
                        name="bonuses"
                        label={ <p>Я принимаю участие и согласен с <span className={styles.registrForm__checkboxUnderlinedText}>условиями бонуса</span> </p>  }
                    />
                </div>
                <Button 
                    text={loginMutation.isPending ? 'Отправка...' : 'регистрация'}
                    type="submit"
                    disabled={loginMutation.isPending}
                />
            </form>
        </div>
    );
}