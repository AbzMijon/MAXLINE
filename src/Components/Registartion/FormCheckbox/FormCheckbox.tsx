import { UseFormRegister, FieldValues, Path, FieldError } from 'react-hook-form';
import styles from './formCheckbox.module.scss';
import checkIcon from '../../../assets/icons/checkIcon.svg';

interface FormCheckboxProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    name: Path<T>;
    label: any;
    error?: FieldError;
    required?: boolean;
}

export default function FormCheckbox<T extends FieldValues>({
    register,
    name,
    label,
    error,
    required = false,
}: FormCheckboxProps<T>) {
    return (
        <div className={styles.formCheckbox}>
            <label className={styles.formCheckbox__label}>
                <input
                    type="checkbox"
                    className={styles.formCheckbox__input}
                    {...register(name, { 
                        required: required ? 'Необходимо подтвердить согласие' : false 
                    })}
                />
                <span className={styles.formCheckbox__box}>
                    <img src={checkIcon} alt="" className={styles.formCheckbox__icon} />
                </span>
                <div className={styles.formCheckbox__text}>{label}</div>
            </label>
            {error && <span className={styles.formCheckbox__error}>{error.message}</span>}
        </div>
    );
}