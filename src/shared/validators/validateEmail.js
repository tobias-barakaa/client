export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
};

export const emailValidationMessage = "please enter a valid email address"