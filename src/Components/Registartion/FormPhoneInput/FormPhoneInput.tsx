import { useState } from 'react';
import styles from './formPhoneInput.module.scss';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import belarusIcon from '../../../assets/icons/belarusIcon.svg';

interface FormPhoneInputProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    name: Path<T>;
    placeholder?: string;
    error?: string;
    label?: string;
}

export default function FormPhoneInput<T extends FieldValues>({
    register,
    name,
    placeholder,
    error,
    label,
}: FormPhoneInputProps<T>) {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    const { onBlur, ...restRegister } = register(name);

    return (
        <div className={styles.formPhoneInput}>
            {label && <label className={styles.formPhoneInput__label}>{label}</label>}
            <div className={`${styles.formPhoneInput__wrap} ${isFocused ? styles.focused : ''} ${error ? styles.error : ''}`}>
                <div className={styles.formPhoneInput__country}>
                    <img src={belarusIcon} alt="Belarus" />
                </div>
                <div className={styles.formPhoneInput__field}>
                    <input
                        type="text"
                        className={styles.formPhoneInput__input}
                        placeholder={placeholder}
                        onFocus={handleFocus}
                        onBlur={(e) => {
                            handleBlur();
                            onBlur(e);
                        }}
                        {...restRegister}
                    />
                </div>
            </div>
            {error && <span className={styles.formPhoneInput__error}>{error}</span>}
        </div>
    );
}