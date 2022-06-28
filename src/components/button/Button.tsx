import { useMemo } from "react";
import cm from "classnames";
import "./Button.scss";

interface IButtonProps {
  children: React.ReactNode;
  variant?: number;
  onClick?: () => void;
}

export default function Button(props: IButtonProps) {
  const variantClassName = useMemo(() => {
    if (props.variant === 2) {
      return "var2";
    }
    return "var1";
  }, [props.variant]);

  return (
    <button className={cm("lp-btn", variantClassName)} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
