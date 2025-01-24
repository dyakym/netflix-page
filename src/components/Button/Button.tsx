import { FC } from "react";
import styles from './Button.module.css';

interface ButtonProps {
  variant: "filled" | "outlined";
  text: string;
  showIcon?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  variant,
  text,
  showIcon = false,
  onClick,
}) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {text}
      {showIcon && (
        <span className={styles.icon}></span>
      )}
    </button>
  );
};

export default Button;
