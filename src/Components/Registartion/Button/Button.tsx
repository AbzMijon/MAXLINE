import styles from './button.module.scss';

interface IButton {
    text: string;
    type?: "submit" | "button" | "reset" | undefined;
    onClick?: () => void;
    disabled?: boolean;
}

export default function Button({ text, type = 'submit', onClick, disabled }: IButton) {
    return (
        <button
            className={styles.button}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}