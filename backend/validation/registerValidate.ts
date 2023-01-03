import validator from "validator";


function validateRegister(data: any){
    const error = {error: ""}

    // PASSWORD VALIDATION:
    if(!validator.isStrongPassword(data.password) || data.password.length >= 128 || validator.contains(data.password, " ")){
        error.error = "Invalid password";
    }

    // EMAIL VALIDATION:

    if(!validator.isEmail(data.email) || validator.contains(data.email, " ")){
        error.error = "Invalid email";
    }

    // LASTNAME VALIDATION
    
    if(!validator.isLength(data.lastname, {min: 1, max: 24}) || validator.contains(data.lastname, " ") || !validator.isAlpha(data.lastname)){
        error.error = "Invalid lastname";
    }

    // FIRSTNAME VALIDATION:

    if(!validator.isLength(data.firstname, {min: 1, max: 24}) || validator.contains(data.firstname, " ") || !validator.isAlpha(data.firstname)){
        error.error = "Invalid firstname";
    }


    if(!data.firstname || !data.lastname || !data.email || !data.password){
        error.error = "Provide all values"
    }

    return {
        error,
        isValid: validator.isEmpty(error.error)
    }
}

export default validateRegister;