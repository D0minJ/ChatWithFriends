import validator from "validator";

function ValidateLogin(data: any){
    const error = {error: ""}

    // PASSWORD VALIDATION:
    if(!validator.isStrongPassword(data.password) || data.password.length <= 128 || validator.contains(data.password, " ")){
        error.error = "Invalid password";
    }

    // EMAIL VALIDATION:
    if(!validator.isEmail(data.email) || validator.contains(data.email, " ")){
        error.error = "Invalid email";
    }

    return {
        error,
        isValid: validator.isEmpty(error.error)
    }
}


export default ValidateLogin;