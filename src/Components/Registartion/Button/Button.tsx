import { ButtonHTMLAttributes, FC } from 'react';
import styles from './button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    type?: "submit" | "button" | "reset";
    onClick?: () => void;
    disabled?: boolean;
}

const Button: FC<IButton> = ({ 
    text, 
    type = 'submit', 
    onClick, 
    disabled = false,
    className = '',
    ...rest 
}) => {
    return (
        <button
            className={`${styles.button} ${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
            {...rest}
        >
            {text}
        </button>
    );
};

export default Button;