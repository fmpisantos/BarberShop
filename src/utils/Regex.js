export const validatePhoneNumber = (number) =>{
    return /^(\+?351)?9\d\d{7}$/.test(number);
}