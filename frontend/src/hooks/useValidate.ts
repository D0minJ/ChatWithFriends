
import validator from "validator"


interface Error {
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
}

export default function Validate(data: any){
    const errors = <Error>{};

    // VALDIATE LOGIN FORM:
    if(Object.keys(data).length === 2) {    

        // EMAIL VALIDATION:
        if(!validator.isEmail(data.email) || validator.contains(data.email, " ")) {
            errors.email = "Valid email required";
        }
        
        if(data.password.length >= 128) {
            errors.password = "Valid password required";
        }

        return errors
    }


    // VALIDATE SIGNUP FORM:

    if(Object.keys(data).length === 4){    

        // FIRSTNAME VALIDATION:
        if(!validator.isLength(data.firstname, {min: 1, max: 24}) || validator.contains(data.firstname, " ") || !validator.isAlpha(data.firstname)) {
            errors.firstname = "Invalid firstname";
        }

        // LASTNAME VALIDATION
        if(!validator.isLength(data.lastname, {min: 1, max: 24}) || validator.contains(data.lastname, " ") || !validator.isAlpha(data.lastname)) {
            errors.lastname = "Invalid lastname";
        }

        // EMAIL VALIDATION:
        if(!validator.isEmail(data.email) || validator.contains(data.email, " ")) {
            errors.email = "Invalid email";
        }
        
        // PASSWORD VALIDATION:
        if(!validator.isStrongPassword(data.password) || data.password.length >= 128 || validator.contains(data.password, " ")) {
            errors.password = "Your password should be at least 8 characters long and contain one uppercase letter, one symbol, and a number.";
        }

        return errors
        
    }
}