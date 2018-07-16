import { validate as validatejs } from 'validate.js'

const fields = {
    email: {
        email: {
            message: '^not correct format for email address'
        }
    },

    password: {
        length: {
            minimum: 6,
            tooShort: '^please use at least 6 - 12 characters'
        }
    }
}

const validate = (fieldName, value) => {
    var validateField = {[fieldName]: fields[fieldName]}
    var validateValue = {[fieldName]: value}
    const message = validatejs(validateValue, validateField)
    
    return message ? message[fieldName][0] : ''
}

export default validate