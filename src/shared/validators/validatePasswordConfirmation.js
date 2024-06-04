export const validatePasswordConf = (pass, confPass) => {
    return pass === confPass;
    
};

export const passwordConfValidationMessage = "Password do not match"