import React, { useId } from "react";
import useTheme from "../../hooks/theme";

interface Props {
  props: {
    label: string;
    name: string;
  }
}

const PasswordInput = ({props}: Props) => {
  const theme = useTheme()
  const [isActive, setIsActive] = React.useState(false)
  const [isBlur, setIsBlur] = React.useState(false)
  const inputId = useId()

  const handleFocus = () => {
    setIsActive(true)
    setIsBlur(false)
  }

  return (
    <label className={`password_input ${theme} ${isActive ? 'active' : ''} ${isBlur ? 'blur' : ''}`} htmlFor={inputId}>
      <span>{props.label}</span>
      <input 
        id={inputId} 
        type="password"
        name={props.name}
        onFocus={() => handleFocus()}
        onBlur={() => setIsBlur(true)}
      />
    </label>
  );
};

export default PasswordInput;