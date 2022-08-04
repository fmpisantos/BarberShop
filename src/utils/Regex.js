export const validatePhoneNumber = (number) =>{
    return /^(\+?351)?9\d\d{7}$/.test(number);
}
export const validateId = (id) =>{
    return id !== null && id !== undefined && id !== 0;
}