import { useState } from "react";
import { AuthInput } from "./AuthInput";
import { Logo } from "./Logo";
import { emailValidationMessage, passwordValidationMessage, validateEmail, validatePassword } from "../shared/validators";


export const Login = ({switchAuthHandler}) => {
    const [formState, setFormState] = useState({
        email: {
            value: '',
            isValid: false,
            showError: false
        },
        password: {
            value: '',
            isValid: false,
            showError: false
        }
    })

    const handleInputValueChange = (value, field) => {
        setFormState(prev => ({
            ...prev,
            [field]: {
                ...prev[field],
                value: value
            }
        }));
    }
const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
        case 'email':
            isValid = validateEmail(value);
        break;
        case  'password':
            isValid = validatePassword(value)
        break;
        default:
            break;
    }
    setFormState(prevState => ({
        ...prevState,
        [field]: {
            ...prevState[field],
            isValid: isValid,
            showError: !isValid
        }
    
    }))
}

console.log(formState)
    return <div className="login-container">
        <Logo text={"Log in to Clone"}>Logo</Logo>
        <form className="auth-form">
            <AuthInput field='email' label='email' 
            value={formState.email.value}
            onChangeHandler={handleInputValueChange}
            onBlurHandler={handleInputValidationOnBlur}
            type='text'
            showErrorMessage={formState.email.showError}
            validationMessage={emailValidationMessage}
            />
            <AuthInput field='password' label='password'
            value={formState.password.value}
            onChangeHandler={handleInputValueChange}
            onBlurHandler={handleInputValidationOnBlur}
            validationMessage={passwordValidationMessage}
            showErrorMessage={formState.password.showError}
            type='password'
            />

            <button
            disabled={!formState.email.isValid || !formState.password.isValid}
            >Log in</button>

        </form>
        <span onClick={switchAuthHandler} className="auth-form-switch-label">Don't have an account ? Sign Up</span>
    </div>
}
