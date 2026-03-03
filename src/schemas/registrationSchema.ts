import * as yup from 'yup';

export const registrationSchema = yup.object({
    phone: yup
        .string()
        .required('Номер телефона обязателен')
        .matches(/^\+375\d{9}$/, 'Введите корректный номер телефона'),
    password: yup
        .string()
        .required('Пароль обязателен')
        .min(6, 'Пароль должен содержать минимум 6 символов'),
    agreement: yup
        .boolean()
        .required('Необходимо согласие на обработку персональных данных'),
    bonuses: yup
        .boolean()
        .required('Необходимо согласие с условиями бонусов'),
});