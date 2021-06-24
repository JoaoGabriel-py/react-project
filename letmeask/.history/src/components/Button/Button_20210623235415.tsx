import { ButtonHTMLAttributes } from "react";

import './button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
};

export function Button({ isOutlined, ...props}: ButtonProps) {
    return (
        <button className="button" {...props} />
    )
}