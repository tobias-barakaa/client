import { useState } from "react";
import { AuthInput } from "./AuthInput";
import { Logo } from "./Logo";
import {
  emailValidationMessage,
  passwordConfValidationMessage,
  passwordValidationMessage,
  usernameValidationMessage,
  validateEmail,
  validatePassword,
  validatePasswordConf,
  validateUsername,
} from "../shared/validators";

export const Register = ({ switchAuthHandler }) => {
  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
    username: {
      value: "",
      isValid: false,
      showError: false,
    },
    passwordConf: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        value: value,
      },
    }));
  };
  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      case "username":
        isValid = validateUsername(value);
        break;
      case "passwordConf":
        isValid = validatePasswordConf(formState.password.value, value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid: isValid,
        showError: !isValid,
      },
    }));
  };

  console.log(formState);
  return (
    <div className="register-container">
      <Logo text={"Sign up in to Clone"}>Logo</Logo>
      <form className="auth-form">
      <AuthInput
          field="username"
          label="username"
          value={formState.username.value}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
          validationMessage={usernameValidationMessage}
          showErrorMessage={formState.username.showError}
          type="password"
        />
        <AuthInput
          field="email"
          label="email"
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
          type="text"
          showErrorMessage={formState.email.showError}
          validationMessage={emailValidationMessage}
        />
       
       
         <AuthInput
          field="password"
          label="password"
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
          validationMessage={passwordValidationMessage}
          showErrorMessage={formState.password.showError}
          type="password"
        />
        <AuthInput
          field="passwordConf"
          label="passwordConf"
          value={formState.passwordConf.value}
          onChangeHandler={handleInputValueChange}
          onBlurHandler={handleInputValidationOnBlur}
          validationMessage={passwordConfValidationMessage}
          showErrorMessage={formState.passwordConf.showError}
          type="password"
        />

        <button
          disabled={
            !formState.email.isValid ||
            !formState.password.isValid ||
            !formState.username.isValid ||
            formState.password.value !== formState.passwordConf.value
          }
        >
          Register
        </button>
      </form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        Already have an account ? Sign in
      </span>
    </div>
  );
};
