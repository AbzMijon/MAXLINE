import { useState } from 'react';
import styles from './formInputPass.module.scss';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import openEye from '../../../assets/icons/openEye.svg';
import closeEye from '../../../assets/icons/closeEye.svg';

interface FormInputPassProps<T extends FieldValues> {
    register: UseFormRegister<T>;
    name: Path<T>;
    placeholder?: string;
    error?: string;
    label?: string;
}

export default function FormInputPass<T extends FieldValues>({
    register,
    name,
    placeholder,
    error,
    label,
}: FormInputPassProps<T>) {

    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleSwitchShowPasswordMode = () => {
        setShowPassword(!showPassword);
    }

    const handleFocus = () => {
        setIsFocused(true);
    }

    const handleBlur = () => {
        setIsFocused(false);
    }

    const { onBlur, ...restRegister } = register(name);

    return (
        <div className={styles.formInputPass}>
            {label && <label className={styles.formInputPass__label}>{label}</label>}
            <div className={`${styles.formInputPass__field} ${isFocused ? styles.focused : ''} ${error ? styles.error : ''}`}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    className={styles.formInputPass__input}
                    placeholder={placeholder}
                    onFocus={handleFocus}
                    onBlur={(e) => {
                        handleBlur();
                        onBlur(e);
                    }}
                    {...restRegister}
                />
                <img src={showPassword ? openEye : closeEye} alt="" onClick={handleSwitchShowPasswordMode} />
            </div>
            {error && <span className={styles.formInputPass__error}>{error}</span>}
        </div>
    );
}